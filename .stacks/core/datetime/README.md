# Stacks Datetime

Easily work with dates.

## โ๏ธ Features

- Display & visualize dates in a human-friendly way
- Easily convert dates to different formats & timezones
- Simply calculate the difference between 2 dates
- Modify dates with ease

## ๐ค Usage

```bash
pnpm i -D @stacksjs/datetime
```

Now, you can easily access it in your project:

```js
import { now, useDateFormat } from '@stacksjs/datetime'

const formatted = useDateFormat(now(), 'YYYY-MM-DD HH:mm:ss')
console.log(formatted) // 2022-11-01 17:06:01
```

To view the full documentation, please visit [https://stacksjs.dev/datetime](https://stacksjs.dev/datetime).

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

- [VueUse](https://vueuse.org)
- [Carbon](https://carbon.nesbot.com)
- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](../../contributors)

## ๐ License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with โค๏ธ
