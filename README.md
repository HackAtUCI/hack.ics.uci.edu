# hack.ics.uci.edu

## Overview

This monorepo uses [turborepo](https://turbo.build/repo) with [pnpm](https://pnpm.io) as a package manager. It contains the following:

### `apps/site`

A [Next.js](https://nextjs.org/) 13 project that uses the new app router.

This app contains the site for [Hack at UCI](https://hack.ics.uci.edu/).

The development server runs at `https://localhost:3000`. If this port is taken, the next available port will be used.

### `apps/studio`

A [Sanity Studio](https://www.sanity.io/studio) project.

This app contains the dashboard used to view and edit content stored in [Sanity](https://www.sanity.io/).

The development server runs at `https://localhost:3333`. If this port is taken, the project will error.

## Workspace Setup

This repo used pnpm, a space efficient replacement to npm.
You can learn more about it's advantages at <https://pnpm.io/>.

Install pnpm with the following command, or use an [alternative instalation method](https://pnpm.io/installation).

```bash
npm install -g pnpm
```

When running commands, use `pnpm` rather than `npm`.

### Dependencies

Running the following command will install dependencies for all apps regardless of where it's executed.

```bash
pnpm install
```

When installing a new dependency, navigate to the app or package directory. If you want to install a package shared by all apps and packages, run the command at the project root. You'll have to use the -w flag (or --workspace-root) to confirm your intention.

### Build

To build all apps and packages, run the following command in the project root.

```bash
pnpm build
```

To build an individual app or package, first navigate to the corresponding directory and run the build command.

### Develop

To develop all apps and packages, run the following command in the project root.

```bash
pnpm dev
```

To develop an individual app or package, first navigate to the corresponding directory and run the dev command.

## License

This repo is currently source available and not licensed under an open source license. This may be subject to change in the future.

Copyright © 2023 Hack at UCI
