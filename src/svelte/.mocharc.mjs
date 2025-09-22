import { fileURLToPath } from 'node:url'
import path from 'node:path'
import pkg from 'glob'
const { glob } = pkg
const specs = glob.sync('src/svelte/tests/**/*.test.ts')
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  extension: ['ts'],
  'node-option': ['register=ts-node/esm'],
}
