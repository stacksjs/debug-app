# Stacks Collections

Easily work with via Laravel-like collections.

## โ๏ธ Features

- Access to Laravel-like Collections API
- Other object helpers

## ๐ค Usage

```bash
pnpm i -D @stacksjs/collections
```

Now, you can easily access it in your project:

```js
import { collect } from '@stacksjs/collections'

const collection = collect([{
  name: 'My story',
  pages: 176,
}, {
  name: 'Fantastic Beasts and Where to Find Them',
  pages: 1096,
}])

console.log(collection.avg('pages')) // 636
```

To view the full documentation, please visit [https://stacksjs.dev/collections](https://stacksjs.dev/collections).

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

## ๐๐ผ Credits

Many thanks to the following core technologies & people who have contributed to this package:

- [Collect.js](https://github.com/ecrmnn/collect.js)
- [Laravel](https://laravel.com/)
- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](../../contributors)

## ๐ License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with โค๏ธ
