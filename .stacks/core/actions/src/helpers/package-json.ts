import { log } from '@stacksjs/x-ray'
import { writeTextFile } from '@stacksjs/storage'
import { packageJsonPath } from '@stacksjs/path'
import { library } from '@stacksjs/config'
import { packageManager } from '../../package.json'

export async function generatePackageJson(type: 'vue-components' | 'web-components' | 'functions') {
  let name, description, directory, keywords, config

  if (type === 'vue-components') {
    name = library.vueComponents.name
    description = library.vueComponents.description
    directory = 'components'
    keywords = library.vueComponents.keywords
    config = 'vue-components'
  }

  else if (type === 'web-components') {
    name = library.webComponents.name
    description = library.webComponents.description
    directory = 'components'
    keywords = library.webComponents.keywords
    config = 'web-components'
  }

  else if (type === 'functions') {
    name = library.functions.name
    description = library.functions.description
    directory = 'functions'
    keywords = library.functions.keywords
    config = 'functions'
  }

  try {
    // the version does not have to be set here,
    // it will be set automatically by the release script
    await writeTextFile({
      path: packageJsonPath(type),
      data: `{
  "name": "${name}",
  "type": "module",
  "version": "",
  "packageManager": "${packageManager}",
  "description": "${description}",
  "author": "${library.author}",
  "license": "MIT",
  "homepage": "https://github.com/${library.repository}/tree/main/${directory}#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/${library.repository}.git",
    "directory": "${directory}"
  },
  "bugs": {
    "url": "https://github.com/${library.repository}/issues"
  },
  "keywords": ${JSON.stringify(keywords)},
  "contributors": ${JSON.stringify(library.contributors)},
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "require": "./dist/index.cjs",
      "import": "./dist/index.js"
    }
  },
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "vite build -c ../build/${config}.ts",
    "prepublishOnly": "pnpm run build"
  },
  "devDependencies": {
    "stacks": "workspace:*"
  }
}
`,
    })

    log.success(`Created the ${type} package.json.`)
  }
  catch (err) {
    log.error(err)
  }
}
