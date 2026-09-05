import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const sourcePath = path.join(root, 'tokens', 'figma-variables.json')
const cssPath = path.join(root, 'src', 'foundations', 'tokens.generated.css')
const tsPath = path.join(root, 'src', 'foundations', 'tokens.generated.ts')

const data = JSON.parse(fs.readFileSync(sourcePath, 'utf8'))
const allVariables = data.variables ?? []
const collections = data.collections ?? []
const variableById = new Map(allVariables.map((variable) => [variable.id, variable]))
const collectionById = new Map(collections.map((collection) => [collection.id, collection]))

function isSupportedFoundationVariable(variable) {
  const collectionName = collectionById.get(variable.variableCollectionId)?.name
  const expectedTypes = {
    'Size': new Set(['FLOAT']),
    'Border radius': new Set(['FLOAT']),
    'Container': new Set(['FLOAT']),
    'Max-width': new Set(['FLOAT']),
    'Color Styles': new Set(['COLOR']),
    'Semantic Colours': new Set(['COLOR']),
    'Typography': new Set(['FLOAT', 'STRING']),
    'Layout': new Set(['FLOAT']),
  }
  return expectedTypes[collectionName]?.has(variable.resolvedType) ?? false
}

const variables = allVariables.filter(isSupportedFoundationVariable)

function slug(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[․.]/g, '-')
    .replace(/[^a-zA-Z0-9/-]+/g, '-')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

function cssName(variable) {
  const collection = collectionById.get(variable.variableCollectionId)?.name
  const name = variable.name

  if (collection === 'Size') return `--kds-size-${slug(name)}`
  if (collection === 'Border radius') return `--kds-radius-${slug(name.replace(/^ui\//, ''))}`
  if (collection === 'Container') return `--kds-container-${slug(name)}`
  if (collection === 'Max-width') return `--kds-${slug(name)}`
  if (collection === 'Color Styles') return `--kds-${slug(name)}`
  if (collection === 'Semantic Colours') return `--kds-${slug(name)}`
  if (collection === 'Typography') return `--kds-${slug(name)}`
  if (collection === 'Layout') return `--kds-${slug(name)}`

  return `--kds-${slug(collection)}-${slug(name)}`
}

function colorToCss(color) {
  const channel = (value) => Math.max(0, Math.min(255, Math.round(value * 255)))
  const r = channel(color.r)
  const g = channel(color.g)
  const b = channel(color.b)
  const a = color.a ?? 1
  if (a < 0.999) return `rgba(${r}, ${g}, ${b}, ${Number(a.toFixed(3))})`
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`
}

function floatToCss(variable, value) {
  const name = variable.name
  if (name.startsWith('font/weight/')) return String(value)
  if (name === 'layout/grid/columns') return String(value)
  if (name.startsWith('font/tracking/')) return `${Number(value) / 100}em`
  return `${Number(value)}px`
}

function directValue(variable, value) {
  if (value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
    const target = variableById.get(value.id)
    if (!target) throw new Error(`Unknown alias target ${value.id} from ${variable.name}`)
    return `var(${cssName(target)})`
  }

  if (variable.resolvedType === 'COLOR') return colorToCss(value)
  if (variable.resolvedType === 'FLOAT') return floatToCss(variable, value)
  if (variable.resolvedType === 'STRING') return JSON.stringify(value)
  if (variable.resolvedType === 'BOOLEAN') return value ? '1' : '0'
  return String(value)
}

function defaultModeValue(variable) {
  const collection = collectionById.get(variable.variableCollectionId)
  const modeId = collection?.defaultModeId ?? Object.keys(variable.valuesByMode ?? {})[0]
  return variable.valuesByMode?.[modeId]
}

function modeValue(variable, modeId) {
  return variable.valuesByMode?.[modeId]
}

function renderDeclarations(list, modeId = null) {
  return list
    .map((variable) => {
      const raw = modeId ? modeValue(variable, modeId) : defaultModeValue(variable)
      if (raw === undefined) return null
      return `  ${cssName(variable)}: ${directValue(variable, raw)};`
    })
    .filter(Boolean)
    .join('\n')
}

const byCollection = new Map()
for (const variable of variables) {
  const collectionName = collectionById.get(variable.variableCollectionId)?.name ?? 'Unknown'
  if (!byCollection.has(collectionName)) byCollection.set(collectionName, [])
  byCollection.get(collectionName).push(variable)
}

const sizeCollection = collections.find((collection) => collection.name === 'Size')
const layoutCollection = collections.find((collection) => collection.name === 'Layout')
const sizeVariables = byCollection.get('Size') ?? []
const layoutVariables = byCollection.get('Layout') ?? []
const staticCollections = ['Border radius', 'Container', 'Max-width', 'Color Styles', 'Semantic Colours', 'Typography']

const css = []
css.push(`/*\n * GENERATED FILE — do not edit directly.\n * Source: tokens/figma-variables.json\n * Run: pnpm tokens:generate\n *\n * Figma aliases remain CSS variable references rather than flattened values,\n * so Brand → Primitive → Semantic relationships are preserved in code.\n */`)

css.push(':root {')
for (const collectionName of staticCollections) {
  const list = byCollection.get(collectionName) ?? []
  if (!list.length) continue
  css.push(`\n  /* ${collectionName} */`)
  css.push(renderDeclarations(list))
}
if (sizeVariables.length) {
  css.push('\n  /* Size — default mode: Comfortable */')
  css.push(renderDeclarations(sizeVariables, sizeCollection.defaultModeId))
}
if (layoutVariables.length) {
  css.push('\n  /* Layout — default mode: XS */')
  css.push(renderDeclarations(layoutVariables, layoutCollection.defaultModeId))
}
css.push('}')

if (sizeCollection) {
  const densityModes = sizeCollection.modes.filter((mode) => mode.modeId !== sizeCollection.defaultModeId)
  for (const mode of densityModes) {
    css.push(`\n[data-density="${slug(mode.name)}"] {`)
    css.push(renderDeclarations(sizeVariables, mode.modeId))
    css.push('}')
  }
}

if (layoutCollection) {
  const breakpointMap = new Map([
    ['SM', 640],
    ['MD', 768],
    ['LG', 1024],
    ['XL', 1280],
    ['2XL', 1536],
  ])

  for (const mode of layoutCollection.modes) {
    if (mode.modeId === layoutCollection.defaultModeId) continue
    const breakpoint = breakpointMap.get(mode.name)
    if (!breakpoint) continue
    css.push(`\n@media (min-width: ${breakpoint}px) {`)
    css.push('  :root {')
    const declarations = renderDeclarations(layoutVariables, mode.modeId)
      .split('\n')
      .map((line) => `  ${line}`)
      .join('\n')
    css.push(declarations)
    css.push('  }')
    css.push('}')
  }
}


fs.mkdirSync(path.dirname(cssPath), { recursive: true })
fs.writeFileSync(cssPath, `${css.join('\n')}\n`)

const tokenEntries = variables.map((variable) => [variable.name, `var(${cssName(variable)})`])
const ts = `/* GENERATED FILE — do not edit directly. Source: tokens/figma-variables.json */\nexport const tokens = ${JSON.stringify(Object.fromEntries(tokenEntries), null, 2)} as const\n\nexport type TokenName = keyof typeof tokens\n`
fs.writeFileSync(tsPath, ts)

console.log(`Generated ${variables.length} tokens`)
console.log(`- ${path.relative(root, cssPath)}`)
console.log(`- ${path.relative(root, tsPath)}`)
