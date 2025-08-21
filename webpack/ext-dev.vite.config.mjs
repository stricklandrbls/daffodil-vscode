import { defineConfig } from 'vite'
import path from 'node:path'
import fs from 'node:fs'
import { builtinModules } from 'node:module'
import unzip from 'unzip-stream'
import { parse as jsoncParse } from 'jsonc-parser'
import { fileURLToPath } from 'node:url'

// ----- helpers to emulate __dirname in ESM (so __dirname-like behavior remains) -----
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ----- local module aliasing (1:1 with webpack) -----
const localModulePath = (moduleName) =>
  path.resolve(__dirname, '../', 'src', moduleName)

const localModuleAliases = {
  dataEditor: localModulePath('dataEditor'),
  tdmlEditor: localModulePath('tdmlEditor'),
  language: localModulePath('language'),
  launchWizard: localModulePath('launchWizard/launchWizard'),
  infoset: localModulePath('infoset'),
  rootCompletion: localModulePath('rootCompletion'),
}

// ----- read package.json values (same as webpack config) -----
const packageData = jsoncParse(
  fs.readFileSync(path.resolve('package.json'), 'utf8')
)
const pkg_version = packageData['version']
const daffodilVersion = packageData['daffodilVersion']
const serverPackage = `daffodil-debugger-${daffodilVersion}-${pkg_version}`
const zipFilePath = path.resolve(
  `debugger/target/universal/${serverPackage}.zip`
)

// ----- post-build unzip plugin (mirrors your webpack plugin) -----
function unzipAfterBuild() {
  return {
    name: 'unzip-server-package',
    apply: 'build',
    async closeBundle() {
      const serverPackageFolder = path.join(
        path.resolve('dist/package'),
        serverPackage
      )

      // remove debugger package folder if exists
      if (fs.existsSync(serverPackageFolder)) {
        fs.rmSync(serverPackageFolder, { recursive: true, force: true })
      }

      // unzip the file into cwd ('.') like your webpack plugin
      await new Promise((resolve, reject) => {
        const stream = fs
          .createReadStream(zipFilePath)
          // @ts-ignore types for unzip-stream
          .pipe(unzip.Extract({ path: '.' }))
        stream.on('close', () => resolve())
        stream.on('error', (err) => reject(err))
      })
    },
  }
}

// NOTE on "mode: 'none'":
// Vite doesn't have 'none', but you can get functionally similar output by disabling minification.
// We'll default to no minify here; set MINIFY=1 env to minify when you "package" (like webpack production).
const shouldMinify = process.env.MINIFY === '1'

// Build a Node CJS bundle for VS Code extension, with source maps, externals, and same file name/output dir.
export default defineConfig({
  // Keep Node/VS Code extension semantics
  // (Vite’s dev server is irrelevant; we’re using build only)
  resolve: {
    alias: {
      ...localModuleAliases,
    },
    // Vite resolves TS/JS by default; explicitly listing to mirror webpack:
    extensions: ['.ts', '.js'],
  },

  // Equivalent to webpack devtool: 'source-map'
  build: {
    sourcemap: true,

    // Do not minify unless explicitly requested (mirrors webpack 'none')
    minify: shouldMinify ? 'esbuild' : false,

    // Output folder and cleaning (webpack output.clean: true)
    outDir: path.resolve(__dirname, '../dist/ext'),
    emptyOutDir: true,

    // Produce a commonjs bundle named extension.js (libraryTarget: 'commonjs2')
    rollupOptions: {
      input: {
        extension: path.resolve(__dirname, '../src/adapter/extension.ts'),
      },
      external: [
        'vscode', // keep vscode external (webpack externals)
        // Externalize Node built-ins to keep Node target behavior
        ...builtinModules,
        // Handle explicit node: specifiers too
        /^node:.*/,
      ],
      output: {
        // mirror webpack: filename: 'extension.js'
        entryFileNames: 'extension.js',
        // commonjs (same as commonjs2 for our purposes here)
        format: 'cjs',
        // keep default dir from build.outDir
        exports: 'auto',
        // Vite/Rollup doesn't have devtoolModuleFilenameTemplate; omitted
        sourcemap: true,
      },
      // Keep strict entry signature like a typical CJS entry
      preserveEntrySignatures: 'strict',
    },

    // Make sure esbuild targets a Node environment (modern Node for VS Code)
    target: 'node18',
  },

  // Keep Node globals; since we output CJS, __dirname behaves as expected in bundle.
  // No additional define needed.

  // Plugin to unzip server package on build completion (1:1 behavior)
  plugins: [unzipAfterBuild()],
})
