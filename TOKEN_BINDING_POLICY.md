# Token binding policy

This project treats `tokens/figma-variables.json` as the design-token source of truth.

## Required binding order

1. Prefer a semantic KDS token when one exists.
2. Otherwise use the appropriate KDS primitive or foundation token.
3. Do not create a second `--site-*` alias for an existing KDS token.
4. Do not add raw HEX/RGB/HSL colours to migrated code.
5. Do not use the legacy `d1:`–`d5:` proportional breakpoint system in migrated code.

Examples:

```css
/* Correct */
color: var(--kds-color-text-primary);
background: var(--kds-color-surface-subtle);
padding-inline: var(--kds-layout-page-margin);
gap: var(--kds-layout-grid-gutter);
font-size: var(--kds-font-size-display-xl);
border-radius: var(--kds-radius-soft-md);

/* Avoid */
color: #1e1e1e;
background: #f5f5f5;
--site-page-margin: var(--kds-layout-page-margin);
```

## Local composition geometry

A percentage or aspect ratio that describes the internal geometry of a single branded artwork is not a reusable design token. It stays local to that CSS module.

Examples:

```css
.artwork { aspect-ratio: 794 / 726; }
.portrait { left: 11.8%; width: 71.3%; }
```

The artwork's colour, reusable spacing, typography, radii and maximum sizes must still bind to KDS tokens.

## Breakpoints

CSS custom properties cannot be used directly in media-query conditions. Media-query thresholds in CSS modules therefore mirror the generated KDS Layout breakpoints and are labelled with their KDS mode. They must not invent intermediate scaling breakpoints.

The current generated Layout breakpoints are sourced from Figma and remain the canonical values.

## Automated check

Run:

```bash
pnpm tokens:check
```

The check fails migrated code if it contains:

- raw colour values;
- `d1:`–`d5:` legacy scaling classes;
- duplicate `--site-*` token aliases.

`src/legacy` is intentionally excluded until each section is migrated.
