# KantarNew engineering rules

This project is being migrated away from Figma-generated code into a clean React architecture.

## Design system source of truth

The Figma variables JSON is the source of truth.

Generated KDS tokens must be used directly whenever a token exists.

Use this hierarchy:

Brand source → Primitive → Semantic → Component.

Prefer semantic tokens over primitive tokens where a semantic meaning exists.

Do not duplicate existing KDS tokens with local `--site-*` variables.

## Styling

Do not introduce Figma-generated or Tailwind-style class strings such as:

- `d1:`
- `d2:`
- `d3:`
- `d4:`
- `d5:`
- `w-[...]`
- `h-[...]`
- `left-[...]`
- `font-['Inter:Bold']`
- raw hex colours for reusable design values

Use CSS Modules for section styling.

Use KDS CSS custom properties from the generated token files.

## Responsive behaviour

Use Grid, Flexbox, intrinsic sizing, `minmax()`, `clamp()` and proper media queries.

Breakpoints should change structure, not provide five separate scaled pixel values.

Do not use page-level:

- zoom
- transform: scale()
- fixed design canvases

Do not hide imagery just to make a breakpoint fit.

## Artwork compositions

Absolute positioning is allowed only inside an intentional artwork/composition container.

Artwork-specific geometry may use local percentages, aspect ratios and object positions.

Example:

.artwork {
  position: relative;
  aspect-ratio: 794 / 726;
}

.portrait {
  position: absolute;
  left: 11.8%;
  width: 71.3%;
}

Do not promote unique artwork geometry into global KDS tokens.

## React structure

Prefer semantic, readable React such as:

<section>
<header>
<nav>
<article>
<h1>–<h6>
<p>
<button>
<a>

Do not reproduce Figma layer nesting with meaningless divs.

Split the homepage into maintainable sections and reusable components.

## Cleanup rule

When touching a legacy section, genuinely migrate it.

Do not wrap or patch old generated markup.

After migration, the active implementation of that section must contain no generated responsive scaling classes or raw reusable design values.

## Validation

Before considering work complete:

- run token checks
- run TypeScript checks
- run the production build
- confirm no raw colours have been introduced
- confirm no d1–d5 classes have been introduced
- visually compare against the reference