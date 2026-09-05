# Project instructions

This repository is a pnpm workspace. The Expo application lives in `apps/mobile`; shared packages live in `packages/*`.

## Working on the mobile app

- Read `apps/mobile/AGENTS.md` before changing files under `apps/mobile`.
- Use pnpm workspace commands from the repository root, for example `pnpm --filter mobile lint`.
- Keep changes scoped to the requested app or package. Do not run the Expo reset script unless explicitly requested.

## Validation

- For TypeScript or Expo changes, run the narrowest relevant validation command. For app-wide changes, use `pnpm --filter mobile lint`.
- Report checks that could not be run and why.
