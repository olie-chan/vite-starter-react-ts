Starter template for a React Typescript project including TailwindCSS, Cypress, ESlint and Prettier.

## Prerequisites

Install [Volta](https://volta.sh) which will automatically use the Node.js and NPM version pinned in the package.json

## Installation

```bash
npm i
```

## Running

```bash
npm run dev
```

## Testing

Component and integration (Cypress) tests that run without opening up a browser (useful for CI) can be run with the following commands

```bash
npm run test:components
```

or

```bash
npm run test:integration
```

Interactive tests which do spin up a browser can be run by using the commands prefixed with `interactive:`

e.g.

```bash
npm run interactive:test:components
```
