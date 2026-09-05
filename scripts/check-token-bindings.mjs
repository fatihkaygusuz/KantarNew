import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const roots = [
  path.join(root, 'src', 'components'),
  path.join(root, 'src', 'sections'),
  path.join(root, 'src', 'foundations'),
]

const ignored = new Set([
  path.join(root, 'src', 'foundations', 'tokens.generated.css'),
  path.join(root, 'src', 'foundations', 'tokens.generated.ts'),
])

const extensions = new Set(['.css', '.ts', '.tsx'])
const violations = []

function walk(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  })
}

for (const file of roots.flatMap(walk)) {
  if (ignored.has(file) || !extensions.has(path.extname(file))) continue
  const source = fs.readFileSync(file, 'utf8')
  const rel = path.relative(root, file)

  const checks = [
    {
      label: 'raw colour value',
      regex: /#[0-9a-fA-F]{3,8}\b|\brgba?\s*\(|\bhsla?\s*\(/g,
      hint: 'Bind colour through a generated --kds-* token.',
    },
    {
      label: 'legacy desktop scaling class',
      regex: /\bd[1-5]:/g,
      hint: 'New code must not use d1–d5 proportional breakpoint classes.',
    },
    {
      label: 'site shadow token',
      regex: /--site-[a-z0-9-]+/gi,
      hint: 'Use the generated KDS token directly. Do not duplicate it behind --site-*.',
    },
  ]

  for (const check of checks) {
    for (const match of source.matchAll(check.regex)) {
      const before = source.slice(0, match.index)
      const line = before.split('\n').length
      violations.push(`${rel}:${line}: ${check.label} (${match[0]}) — ${check.hint}`)
    }
  }
}

if (violations.length) {
  console.error('Token binding check failed:\n')
  console.error(violations.map((v) => `- ${v}`).join('\n'))
  process.exit(1)
}

console.log('Token binding check passed')
console.log('- no raw colour values in clean code')
console.log('- no d1–d5 scaling classes in clean code')
console.log('- no duplicate --site-* token layer in clean code')
