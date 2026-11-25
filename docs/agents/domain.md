# Domain Docs

How the engineering skills should consume this repo’s domain documentation when exploring the codebase.

## Before exploring, read these

- **`GLOSSARY.md`** at the repository root.
- **`GLOSSARY-MAP.md`** at the repository root if it exists; it points to one `GLOSSARY.md` per context.
- **`docs/adr/`**: read ADRs that concern the area about to be changed.

If these files don’t exist, proceed silently. The `/domain-modeling` skill creates them lazily when terms or decisions are resolved.

## File structure

This repository uses a single-context layout:

```text
/
├── GLOSSARY.md
├── docs/adr/
│   ├── 0001-example-decision.md
│   └── 0002-another-decision.md
└── src/
```

## Use the glossary’s vocabulary

When an output names a domain concept—in an issue title, hypothesis, test name or refactoring proposal—use the term defined in `GLOSSARY.md`.

If a required concept isn’t present, reconsider whether the language belongs to the project or note the possible gap for `/domain-modeling`.

## Flag ADR conflicts

If an output contradicts an existing ADR, surface the conflict explicitly instead of silently overriding the decision.
