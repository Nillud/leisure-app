# Expo mobile app instructions

This app uses Expo SDK 57. Read the exact versioned documentation at
https://docs.expo.dev/versions/v57.0.0/ before writing or changing Expo code.

- App routes are in `src/app`; shared components are in `src/components`.
- Preserve the existing Expo Router structure and TypeScript configuration.
- Prefer the dependencies and Expo APIs already present in `package.json`; do not add a package when an existing Expo module covers the need.
- Run `pnpm --filter mobile lint` after meaningful app code changes.
