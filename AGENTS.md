# Repository Instructions

The normative terms in this document are interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Git Workflow

- Agents MUST NOT commit or push directly to `main`.
- Agents MUST create a dedicated branch from the latest `origin/main`.
- Changes MUST be submitted through a pull request targeting `main`.
- Commits MUST follow Conventional Commits as documented in `CONTRIBUTING.md`.
- Unrelated changes MUST remain outside the current branch and commit.

## Validation

- Modified JavaScript MUST pass `node --check`.
- Visual changes MUST be inspected on desktop and mobile viewports.
- Referenced screens and assets MUST exist before a pull request is opened.
- `git diff --check` MUST pass before committing.
