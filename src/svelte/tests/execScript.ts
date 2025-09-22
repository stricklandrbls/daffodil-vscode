// const path = require('path')
// const fs = require('fs')
// const child_process = require('child_process')
import path from 'path'
import fs from 'fs'
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let testExeSvelte: ReturnType<typeof spawn> | undefined = undefined

let debounceTimeout: NodeJS.Timeout | undefined = undefined

const srcDirsSvelte = [path.resolve(__dirname, '../'), path.resolve(__dirname)]
function execSvelteTests() {
  testExeSvelte = spawn(
    'yarn',
    [
      'mocha',
      '-c',
      './src/svelte/.mocharc.mjs',
      'src/svelte/tests/**/*.spec.ts',
    ],
    { stdio: 'inherit' }
  )
  testExeSvelte.on('exit', (code, signal) => {
    testExeSvelte = undefined
  })
}
function restartTests() {
  console.log('Restarting tests')
  if (testExeSvelte && !testExeSvelte.killed) {
    const oldProc = testExeSvelte
    testExeSvelte = undefined

    oldProc.once('exit', () => {
      execSvelteTests
    })
    oldProc.kill()
  } else {
    execSvelteTests()
  }
}
export function execTests() {
  console.log('Watching: ', ...srcDirsSvelte)

  for (const dir of srcDirsSvelte) {
    fs.watch(dir, { recursive: true }, (eventType, filename) => {
      if (debounceTimeout) clearTimeout(debounceTimeout)

      debounceTimeout = setTimeout(() => {
        restartTests()
      }, 1000)
    })
  }
  execSvelteTests()
}
