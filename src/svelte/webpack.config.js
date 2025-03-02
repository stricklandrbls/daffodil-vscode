const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = path.resolve(__dirname, 'src', 'main.ts')
const buildDir = path.resolve(__dirname, './dist')
const svelteInclude = path.resolve('node_modules', 'svelte/src')
const appHTML = path.resolve(__dirname, 'src/app.html')
const indexHTML = path.resolve(buildDir, 'index.html')

module.exports = (env) => /** @type WebpackConfig */ {
  const isDev = !!(env && env.development)

  return {
    mode: isDev ? 'development' : 'production',
    entry: entry,
    output: {
      filename: 'dataeditor.js',
      path: buildDir,
      clean: true,
    },
    resolve: {
      alias: {
        svelte: svelteInclude,
      },
      extensions: ['.mjs', '.js', '.ts', '.svelte', '.d.ts'],
      conditionNames: ['browser', 'svelte'],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: { customElement: true, hydratable: true }, // Svelte5 REQURIED
              preprocess: require('svelte-preprocess')(),
            },
          },
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.d\.ts$/,
          use: 'null-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: appHTML,
        filename: indexHTML,
        inject: 'body',
      }),
    ],
  }
}
