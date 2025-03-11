import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'nonce',
      transformIndexHtml(html) {
        return html.replace(
          /<script type="module" crossorigin src="(.*?)"><\/script>/g,
          `<script type="module" crossorigin src="$1" nonce="__nonce__"></script>`
        )
      },
    },
  ],
  mode: 'development',
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: (info) => {
          const asset = info.names
          console.log(asset)
          return info.originalFileNames.toString()
          if (info.names.includes(/[.]woff2/)) {
            return 'styles.css'
          }
        },
        format: 'iife', // Immediately Invoked Function Expression for a single file
        inlineDynamicImports: true, // Forces all dynamic imports to be included in the same file
        entryFileNames: 'index.js', // Name of the final output file
      },
    },
    outDir: '../../dist/views/dataEditor',
  },
  server: { watch: { cwd: '.' } },
})
