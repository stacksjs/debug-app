# Stacks Modules

A custom user module system. Place a `.ts` file with the following template & it will be installed automatically.

## ๐ค Usage

```bash
pnpm i -D @stacksjs/modules
```

Now, you can use it in your project:

```ts
import { type UserModule } from '@stacksjs/types'

export const install: UserModule = ({ app, router, isClient }) => {
  // do something
}
```

Learn more in the docs.

## ๐งช Testing

```bash
pnpm test
```

## ๐ Changelog

Please see our [releases](https://github.com/stacksjs/stacks/releases) page for more information on what has changed recently.

## ๐ช๐ผ Contributing

Please see [CONTRIBUTING](../../.github/CONTRIBUTING.md) for details.

## ๐ Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## ๐ License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with โค๏ธ
