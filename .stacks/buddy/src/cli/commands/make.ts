import { ExitCode } from '@stacksjs/types'
import type { CLI, MakeOptions } from '@stacksjs/types'
import { log, prompts } from '@stacksjs/cli'
import {
  invoke,
  component as makeComponent,
  database as makeDatabase,
  factory as makeFactory,
  fx as makeFunction,
  language as makeLanguage,
  migration as makeMigration,
  notification as makeNotification,
  page as makePage,
  stack as makeStack,
} from '../actions/make'

const descriptions = {
  component: 'Create a new component',
  page: 'Create a new page',
  function: 'Create a new function',
  language: 'Create a new language',
  database: 'Create a new database',
  migration: 'Create a new migration',
  factory: 'Create a new factory',
  notification: 'Create a new notification',
  stack: 'Create a new new stack',
  debug: 'Enable debug mode',
}

async function make(stacks: CLI) {
  stacks
    .command('make', 'The make command')
    .option('-c, --component', descriptions.component, { default: false })
    .option('-p, --page', descriptions.page, { default: false })
    .option('-f, --function', descriptions.function, { default: false })
    .option('-l, --language', descriptions.language, { default: false })
    .option('-d, --database', descriptions.database, { default: false })
    .option('-m, --migration', descriptions.migration, { default: false })
    .option('-f, --factory', descriptions.factory, { default: false })
    .option('-n, --notification', descriptions.notification, { default: false })
    .option('-s, --stack', descriptions.stack, { default: false })
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0]

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      if (hasNoOptions(options)) {
        const answers = await prompts.multiselect({
          type: 'multiselect',
          name: 'make',
          message: 'What are you trying to make?',
          choices: [
            { title: 'Component', value: 'component' },
            { title: 'Function', value: 'function' },
            { title: 'Page', value: 'page' },
            { title: 'Language', value: 'language' },
            { title: 'Notification', value: 'notification' },
            { title: 'Database', value: 'database' },
            { title: 'Migration', value: 'migration' },
            { title: 'Factory', value: 'factory' },
            { title: 'Stack', value: 'stack' },
          ],
        })

        // creates an object out of array and sets answers to true
        options = answers.reduce((a: any, v: any) => ({ ...a, [v]: true }), {})
      }

      await invoke(options)

      process.exit(ExitCode.Success)
    })

  stacks
    .command('make:component', descriptions.component)
    .option('--n, -name', 'The name of the component')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makeComponent(options)
    })

  stacks
    .command('make:database', descriptions.database)
    .option('--n, -name', 'The name of the database')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makeDatabase(options)
    })

  stacks
    .command('make:migration', descriptions.migration)
    .option('--n, -name', 'The name of the migration')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makeMigration(options)
    })

  stacks
    .command('make:factory', descriptions.factory)
    .option('--n, -name', 'The name of the factory')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makeFactory(options)
    })

  stacks
    .command('make:page', descriptions.page)
    .option('--n, -name', 'The name of the page')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makePage(options)
    })

  stacks
    .command('make:function', descriptions.function)
    .option('--n, -name', 'The name of the function')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      await makeFunction(options)
    })

  stacks
    .command('make:lang', descriptions.language)
    .option('--n, -name', 'The name of the language')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makeLanguage(options)
    })

  stacks
    .command('make:notification', descriptions.notification)
    .option('--n, -name', 'The name of the notification')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makeNotification(options)
    })

  stacks
    .command('make:stack', descriptions.stack)
    .option('--n, -name', 'The name of the stack')
    .option('--debug', descriptions.debug, { default: false })
    .action(async (options: MakeOptions) => {
      const name = stacks.args[0] || options.name
      options.name = name

      if (!name) {
        log.error('You need to specify a name. Read more about the documentation here.')
        process.exit(ExitCode.InvalidArgument)
      }

      await makeStack(options)
    })
}

function hasNoOptions(options: MakeOptions) {
  return !options.component && !options.page && !options.function && !options.language && !options.database && !options.migration && !options.factory && !options.notification && !options.stack
}

export { make }
