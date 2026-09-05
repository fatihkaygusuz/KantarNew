# Homepage migration v2

## Principle

The existing Figma-generated homepage is retained only as a visual and behaviour reference while sections are rebuilt into maintainable React + CSS Modules.

## Foundation rule

`tokens/figma-variables.json` is the design-token source of truth.

Migrated code must:

- bind directly to generated KDS tokens;
- prefer semantic tokens over primitives when semantics exist;
- avoid duplicate `--site-*` aliases;
- avoid raw colour values;
- avoid the legacy d1–d5 proportional breakpoint ladder;
- keep unique artwork geometry local rather than pretending it is a reusable KDS token.

## Current migration state

- [x] Token generator
- [x] Token-binding guard
- [x] Container
- [x] Eyebrow
- [x] ArrowLink
- [x] Intelligence section
- [ ] Hero
- [ ] Top value/card grid
- [ ] Gallery
- [ ] Editorial carousel
- [ ] Signal Intelligence
- [ ] Kantar in Numbers
- [ ] Header/navigation
- [ ] Remove legacy layer

## Rule for future work

Never patch a migrated section in `src/legacy`. Replace the relevant legacy render with the clean section and continue forward.
