# Stacks Path

Easily work with encryptions, decryptions, and hashing.

## โ๏ธ Features

- Base64 support
- Bcrypt support
- Argon support
- Implements the Advanced Encryption Standard (AES)
- Written in modern ESM/TypeScript

## ๐ค Usage

```bash
pnpm i -D @stacksjs/security
```

Now, you can easily access it in your project:

```js
import { base64Encode, base64Verify, bcryptEncode, bcryptVerify, decrypt, encrypt, makeHash, md5Encode, verifyHash } from '@stacksjs/security'

// and more...
```

To view the full documentation, please visit [https://stacksjs.dev/security](https://stacksjs.dev/security).

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

- [crypto-js](https://github.com/brix/crypto-js)
- [js-base64](https://www.npmjs.com/package/js-base64)
- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](../../contributors)

## ๐ License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with โค๏ธ
