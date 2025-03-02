const sveltePreprocess = require('svelte-preprocess')
import adapter from '@sveltejs/adapter-static'

const config = {
  // kit: {
  preprocess: sveltePreprocess(),
  compilerOptions: {
    dev: false,
    hydratable: true,
    compatability: { componentApi: 4 },
  },
  adapter: adapter({
    // default options are shown. On some platforms
    // these options are set automatically — see below
    pages: 'build',
    assets: 'build',
    fallback: undefined,
    precompress: false,
    strict: true,
  }),
  // },z
}
export default config
// module.exports = {
//   preprocess: sveltePreprocess(),
//   compilerOptions: {
//     dev: false,
//     hydratable: true,
//   },
//   adapter: adapter,
// }
