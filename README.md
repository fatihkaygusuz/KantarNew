# KantarNew — Clean Architecture v2.1

This package is the clean migration base for the Kantar marketing homepage.

## Source of truth

`tokens/figma-variables.json` is the canonical token input exported from Figma.

Generate the code tokens with:

```bash
pnpm tokens:generate
```

This produces:

- `src/foundations/tokens.generated.css`
- `src/foundations/tokens.generated.ts`

Figma aliases are preserved as CSS variable references, so the Brand → Primitive → Semantic relationships stay connected.

## Token purity

Migrated code binds directly to generated `--kds-*` variables. There is no duplicate `--site-*` token layer.

Check token binding with:

```bash
pnpm tokens:check
```

Or run the full local check:

```bash
pnpm check
```

## Run

Requires Node 22.12+ and pnpm 10.34.3.

```bash
corepack enable
pnpm install
pnpm dev
```

`predev` regenerates tokens automatically. `prebuild` regenerates tokens and runs the token-binding check before Vite builds.

## Architecture

```text
src/
├── app/
├── assets/
├── components/       clean reusable components
├── foundations/      generated tokens, fonts, typography, globals
├── sections/         clean migrated marketing sections
└── legacy/           quarantined Figma-generated implementation
```

Do not add new implementation to `src/legacy`.

See `TOKEN_BINDING_POLICY.md` for binding rules and `TOKEN_AUDIT_V2_1.md` for the current audit.
