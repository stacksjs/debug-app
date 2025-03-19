> [!NOTE]  
> This project is evolutionizing into [`clarity`](https://github.com/stacksjs/clarity).

![Social Card of Stacks](.github/art/social.png)

# Rapid App Development

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm downloads][npm-downloads-src]][npm-downloads-href]
<!-- [![Codecov][codecov-src]][codecov-href] -->

_For internal usage only until the beta is released by the end of October._

The goal of the Stacks framework is to _help you_ create & maintain frontends & backends without having to worry about the boilerplate. Whether it's SSG pages, npm distributed & framework-agnostic component & function libraries, or infinitely scalable APIs, Stacks helps you every step along the way, including production deployments and the maintenance of its related infrastructure (server or serverless).

Convention over configuration is our mantra—in beginner & expert-friendly ways.

![Atomic UI & FX Design](./apps/docs/images/diagram.png)

## Features

### Stacks Engine

- ☁️ **Cloud** _"on-demand, auto-scaling, zero maintenance"—create your own cloud_
- ⚡️ **CDN** _auto-setup & maintenance of low-latency CDN on top of your storage origins & APIs_
- 🚀 **Deployment Manager** _take the sweat & stress out of production deployments_
- 📫 **Release Manager** _libraries (component & function) auto-published to npm, git helpers, and more_
- 🤖 **CI/CD** _native CI, release, auto changelog generations & other workflows_
- 👩🏽‍🔧 **Linter & Formatter** _auto-configured & built into your IDE_
- 💡 **IDE Integration** _Auto-completions, inline docs & a powerful VS Code setup_
- 💪🏼 **Type Strong** _Built-in end-to-end type safety_
- 📚 **Smart Bundling** _Vite powered & extendable_
- 🍀 **Auto Imports** _Components, Functions. Date, String & Array helpers, Collections, VueUse, etc._
- 📈 **Modern DX** _latest & greatest tooling accessible natively, including ESNext support_
- 🪄 **Zero-Config** _yet highly configurable_

No matter whether you are a beginner or an expert, the approachable Stacks design allows you to learn at your own pace, using our thorough documentation covering every aspect of the framework. Stacks is extremely beginner & expert-friendly.

### UI Engine

- 🎨 **Atomic CSS** _style with ease, powered by UnoCSS_
- 🧩 **Components** _automatically generate optimized Vue & Web Component libraries_
- ⚡️ **Pages (SSG)** _Static site generation & layouts developed—without breaking a sweat_
- 0️⃣ **Zero-config PWA** _sensible built-in default configs for common use cases_
- 🤖 **Deployments** _natively deploy to AWS, Netlify, Vercel, or elsewhere_
- 🍀 **Vue-powered** _extendable & native access to the ecosystem_
- 🧪 **Testing** _unit & e2e tests powered by Vitest_

### FX Engine

- 🏎️ **APIs** _scalability & maintainability built-in_
- 💨 **Cache** _Redis or DynamoDB_
- ⚙️ **CLIs** _create beautiful CLIs for Linux, Windows, and Mac. Without any requirements._
- 📀 **Database** _Prisma, PlanetScale, Supabase, ..._
- 👾 **Errors** _native type-safe error handling_
- 🧩 **Functions** _develop more easily & rapidly_
- 📢 **Notifications** _simply send emails, SMSs, and webhooks_
- ⚙️ **Queues** _run your heavy workload in the background_
- 🏎️ **Realtime** _"everything you need to build dynamic real-time apps"_
- 🧭 **Router** _smart routing, file-based or Laravel-like_
- 💾 **Storage** _easily create & make use of local & remote storages/file systems_
- 🤖 **Deployments** _server & serverless deployment platform for your APIs (AWS support and more)_
- 🧪 **Testing** _covered by Vitest_

Develop beautiful, reactive, composable UIs without learning a new set of languages. HTML, CSS, and minimal JavaScript—that's all you need to dive in now! _Or TypeScript ✌🏼_

> _A true rapid application development framework for all Full Stack needs. Next-level & deep DX._

## Get Started

It's incredibly easy to get started with this framework. Simply run the following command in your terminal:

```bash
curl -fsSL https://stacksjs.dev/setup | sh

# alternatively, if you know pnpm is already installed, get started via:
npx stacks create my-project
```

> **Note**
> pnpm 7.14 or higher required. _Run the setup script & Stacks will set you up._

## 🤖 Usage

Meet the Stacks Toolkit. The following list is of some of the most common ways to interact with the Stacks API:

```bash
stacks install # installs all dependencies
stacks dev # starts one of the dev servers (components, functions, pages, or docs)
stacks build # follow CLI prompts to select which library (or server) to build
stacks commit # follow CLI prompts for committing changes
stacks release # creates the releases for the stack & consequently, publishes them to npm

stacks make:component HelloWorld # scaffolds a component
stacks make:function HelloWorld # scaffolds a function
stacks make:page hello-world # scaffolds a page (https://127.0.0.1/hello-world)

stacks --help
```

<details>
<summary>View the complete Stacks Toolkit</summary>

```bash
stacks --version # get the Stacks version
stacks --help # view help menu
# please note: you may suffix any command with the
# `command --help` flag to review the help menu

stacks install # installs your dependencies
stacks fresh # fresh reinstall of all deps
stacks clean # removes all your deps

stacks update # auto-update deps & the Stacks framework
stacks update:dependencies # auto-update deps & the Stacks framework
stacks update:framework # auto-update deps & the Stacks framework
stacks update:package-manager # auto-update deps & the Stacks framework
stacks update:node # update to latest project-defined node version
stacks update:all # update Node, package manager, framework, dependencies

# if you need any more info on any command listed here, you may suffix
# any of them via the "help option", i.e. `stacks ... --help`

stacks dev # start one of the dev servers (components, functions, pages, or docs)
stacks dev:components # start local playground dev server
stacks dev:desktop # start local Desktop dev server
stacks dev:pages # start local playground pages dev server
stacks dev:functions # stub local the functions
stacks dev:docs # start local docs dev server
stacks development # `stacks dev` alias

# for Laravel users, `serve` may be a more familiar command. Hence, we aliased it:
stacks serve
stacks serve:components
stacks serve:pages
stacks serve:functions
stacks serve:docs

# building for production (e.g. AWS, Google Cloud, npm, Vercel, Netlify, et al.)
stacks build # select a specific build (follow CLI prompts)
stacks build:components # build Vue component library & Web Component library
stacks build:vue-components # build Vue 2 & 3-ready Component library
stacks build:web-components # build framework agnostic Web Component library (i.e. Custom Elements)
stacks build:functions # build function library
stacks build:pages # build SSG pages
stacks build:all # build all your code

# `stacks build` aliases
stacks prod
stacks prod:components
stacks prod:vue-components
stacks prod:web-components
stacks prod:functions
stacks prod:pages
stacks prod:all
stacks production # `stacks prod` alias

# sets your application key
stacks key:generate

stacks make:stack project
stacks make:component HelloWorld
stacks make:function hello-world
stacks make:page hello-world
stacks make:lang de
stacks make:notification welcome-email
stacks make:database cars
stacks make:table brands
stacks make:migration create_cars_table
stacks make:factory cars
stacks make:seed cars

stacks lint # runs linter
stacks lint:fix # runs linter and fixes issues

stacks commit # follow CLI prompts for committing staged changes
stacks release # creates the releases for the stack & triggers the Release Action (workflow)
stacks changelog # generates CHANGELOG.md

# when deploying your app/s to a remote server or cloud provider
stacks deploy
stacks deploy:docs
stacks deploy:functions
stacks deploy:pages
stacks deploy:all

# select the example to run (follow CLI prompts)
stacks example
stacks example:vue
stacks example:web-components

# you likely won't need to run these commands as they are auto-triggered, but they are available
stacks generate
stacks generate:entries
stacks generate:vue-compat
stacks generate:web-types
stacks generate:vscode-custom-data
stacks generate:ide-helpers
stacks generate:component-meta
stacks generate:all

# generates your application key
stacks key:generate

# generate your TypeScript declarations
stacks types:generate
stacks types:fix

# test your stack
stacks test # runs test suite
stacks test:unit # runs unit tests
stacks test:e2e # runs e2e tests
stacks test:coverage # runs test coverage
stacks test:types # runs typecheck

# the CLI may be triggered in any
# of the following syntax:
stx fresh
stacks fresh
bud fresh
buddy fresh
pnpm stx fresh
pnpm stacks fresh
pnpm buddy fresh
pnpm fresh
pnpm run fresh
pnpm run buddy fresh
```

</details>

Read more here about the Stacks CLI in the documentation.

## 📚 Utilizing the Built Libraries

Because Stacks optimizes the development of easily reusable & composable component & function libraries, the primary intention is to always _keep it simple, yet configurable._

By default, Stacks realizes whether your Stack includes components, functions, and/or pages. Based on that determination, Stacks builds your outputs.

The UI libraries that automatically get built are: a Web Component (Custom Elements) & Vue Component library.

<details>
<summary>Web Component usage</summary>

```bash
npm install my-awesome-library
```

After you installed your Stacks generated library, you can use a "Custom Element" (Web Component) in the following way:

```html
<html>
  <body>
    <hello-world name="Jane Doe"></hello-world>
    <script src="my-awesome-library.js"></script>
  </body>
</html>
```

</details>

<details>
<summary>Vue 2 & 3 usage</summary>

```bash
npm install my-awesome-library
```

After you installed your Stacks generated library, you can use your Vue Components in the following way:

```vue
<script setup lang="ts">
import HelloWorld from 'my-awesome-library'
</script>

<template>
  <HelloWorld name="J Doe" />
</template>
```

</details>

_A function library may also be automatically generated._

<details>
<summary>Functions usage</summary>

```bash
npm install hello-world-library
```

After you installed your Stacks generated library, you can use your functions in the following way:

```ts
import { count, increment } from 'hello-world-fx'

console.log('count is', count)
increment()
console.log('increased count is', count)
```

</details>

You may view this framework as an incredibly "useful set of frames" to assist in efficiently bootstrapping, designing, and managing component & function libraries—using industry best practices, to reach one of the broadest user bases possible.

## 🚙 Roadmap

Part of the Stacks ecosystem are the following first-party supported stacks:

- [Table](https://github.com/stacksjs/table) (Q4 - Data tables with ease)
- [Calendar](https://github.com/stacksjs/calendar) (Q4 - Add to Calendar utilities—iCal, Google, and more)
- [Command Palette](https://github.com/stacksjs/command-palette) (Q4 - `⌘ + k` for the web)
- [Date Picker](https://github.com/stacksjs/date-picker) (Q4 - Beautiful, modern date picker)
- [File Manager](https://github.com/stacksjs/file-manager) (Q4 - Build your own file manager—like Dropbox or Google Drive)
- [Image](https://github.com/stacksjs/image) (Q4 - Modern image experience)
- [Video](https://github.com/stacksjs/video) (Q4 - Modern video experience)
- [Audio](https://github.com/stacksjs/audio) (Q4 - Modern audio experience)
- [Web3](https://github.com/stacksjs/web3) (Q4 - Solana support, cross-chain core. _Ethereum & Cardano drivers coming._)
  - [Wallets](https://github.com/stacksjs/wallets) (Q4 - Wallet Authentication)
  - [NFT](https://github.com/stacksjs/nft) (Q4 - NFTs, Candy Machine mechanisms, and more.)
  - [DeFi](https://github.com/stacksjs/defi) (Q4 - Cross-chain DeFi engine, including staking support)
  - [DAO](https://github.com/stacksjs/dao) (Q4 - Powerful toolkit for DAO governance)

View our detailed roadmap/s [here](https://github.com/stacksjs/stacks/projects?query=is%3Aopen) for more information. Additionally, you may find interesting information & examples over at [Awesome Stacks](https://github.com/stacksjs/awesome-stacks).

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/stacksjs/stacks/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 Sponsors

Once we launch a usable Stacks version, we hope people will start enjoying it! Coming soon.

## 🙏🏼 Credits

Many thanks to the following core technologies & people who have contributed to this package:

- [Chris Breuer](https://github.com/chrisbbreuer)
- [Dan Scanlon](https://twitter.com/danscan) _many thanks for donating the `stacks` name on npm_
- [All Contributors](../../contributors)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@stacksjs/stacks?style=flat-square
[npm-version-href]: https://npmjs.com/package/@stacksjs/stacks

[npm-downloads-src]: https://img.shields.io/npm/dm/@stacksjs/stacks?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@stacksjs/stacks

[github-actions-src]: https://img.shields.io/github/workflow/status/stacksjs/stacks/CI/main?style=flat-square
[github-actions-href]: https://github.com/stacksjs/stacks/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/stacksjs/stacks/main?style=flat-square
[codecov-href]: https://codecov.io/gh/stacksjs/stacks -->
