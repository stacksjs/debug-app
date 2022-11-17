# Stacks Storage

This package contains the Stacks File System source.

## ☘️ Features

- Easily create your own cloud storage
- Driver-based architecture
- Laravel-like Storage API
- Drop-in Node.js module replacement

## 🤖 Usage

```bash
pnpm i -D @stacksjs/storage
```

Now, you can use it in your project:

```js
import {
  _dirname,
  readJsonFile,
  writeJsonFile,
  readTextFile,
  writeTextFile,
  isFolder,
  isFile,
  hasFiles,
  hasComponents,
  hasFunctions,
  copyFolder,
  deleteFolder,
  deleteFiles,
  deleteEmptyFolders,
  doesFolderExist,
  fs, // fs-extra Node module
  fileURLToPath,
} from '@stacksjs/storage'

// wip
```

To view the full documentation, please visit [https://stacksjs.dev/storage](https://stacksjs.dev/storage).

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/stacksjs/stacks/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](../../.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with ❤️
