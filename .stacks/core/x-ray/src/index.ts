import consola from 'consola'
import { ray } from 'node-ray'

const log = consola
const debug = ray

function dump(...args: any[]) {
  return debug(...args)
}

function dd(...args: any[]) {
  return dump(...args).showApp()
}

export { log, debug, dd, dump, ray }
