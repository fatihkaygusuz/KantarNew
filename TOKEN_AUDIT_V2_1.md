# Token audit — v2.1

## Completed

- Figma variables remain the source for generated CSS and TypeScript tokens.
- Figma aliases remain CSS `var(...)` references; they are not flattened.
- Removed the generated `--site-*` alias layer.
- Removed `src/foundations/site.css`.
- `Container` now binds directly to Layout, Container and Measure tokens.
- `Eyebrow` now binds directly to Typography, Size and colour tokens.
- `ArrowLink` now binds directly to semantic colour, typography and Size tokens.
- `IntelligenceSection` now binds reusable values directly to generated KDS tokens.
- Added an automated token-binding check.

## Clean-code audit result

The v2.1 clean layer contains:

- 0 raw HEX/RGB/HSL colour values;
- 0 `d1:`–`d5:` scaling classes;
- 0 `--site-*` aliases.

The legacy layer still contains generated Figma code by design. It is quarantined and replaced section by section.

## Intentional local values

The Intelligence artwork keeps only composition-specific percentage geometry and its source aspect ratio locally. These values describe one piece of artwork and are not promoted to reusable KDS tokens.
