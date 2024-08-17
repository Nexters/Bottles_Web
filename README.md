<img width="300" alt="bottle_logo" src="https://github.com/user-attachments/assets/a44026e9-981b-42d0-bbd1-4bcad9b2e58c">


#### This is an official repository for @bottlesteam web

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `bottle`: a Next.js project for web view inside the [Bottle](https://bottle.bottles.asia/login) native app
- `web`: a Next.js project for a [promotional website](https://bottles.asia)
- `admin`: a React project for the admin panel managing the Bottle app 
- `@bottlesteam/ui`: a stub React component library shared by services located in `apps/**`
- `@bottlesteam/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@bottlesteam/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@bottlesteam/vitest-config`: `vitest.config`s used throughout the monorepo
- `@bottlesteam/e2e`: a package that runs e2e tests for each services

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
pnpx turbo run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpx turbo run dev
```

### Develop

To develop all apps and packages, run the following command:

```
pnpx turbo run test
pnpx turbo run test:e2e
```

