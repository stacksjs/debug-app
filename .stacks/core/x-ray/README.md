# Stacks Logging

Log anything.

## โ๏ธ Features

- Works in browser and server
- Pretty logs
- Logs anything

## ๐ค Usage

```bash
pnpm i -D @stacksjs/x-ray
```

Now, you can use it in your project:

```js
import { log } from '@stacksjs/x-ray'

log('some description') // aliases to log.log()
log.debug('some debug description')
log.info('some info description')
log.warn('some warning description')
log.error('some error description')
// and more...
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
