#!/usr/bin/env node

/**
 * Thanks for inspiration:
 * https://github.com/vueuse/vueuse/blob/main/scripts/fix-types.ts
 */

import { generateVueCompat } from './helpers/vue-compat'

await generateVueCompat(['wip'])
