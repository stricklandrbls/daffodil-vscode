const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'
const sveltePreprocess = require('svelte-preprocess')
module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'main.ts'),
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte/src'),
    },
    extensions: ['.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    conditionNames: ['svelte', 'browser'],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'dataeditor.js',
    chunkFilename: 'dataeditor.050.js',
  },
  module: {
    rules: [
      {
        test: /\.svelte\.ts$/,
        use:{
          loader: 'ts-loader',
          options:{
            preprocess: sveltePreprocess()
          }
        }
      },
      // This is the config for other .ts files - the regex makes sure to not process .svelte.ts files twice
      {
        test: /(?<!\.svelte)\.ts$/,
        loader: "ts-loader",
      },
      {
        // Svelte 5+:
        test: /\.(svelte|svelte\.js)$/,
        // Svelte 3 or 4:
        // test: /\.svelte$/,
        // In case you write Svelte in HTML (not recommended since Svelte 3):
        // test: /\.(html|svelte)$/,
        use:{
          loader: 'svelte-loader',
          options:{
            preprocess: sveltePreprocess()
          }
        }
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      },
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   loader: 'ts-loader',
      //   options: {
      //     transpileOnly: true,
      //     configFile: path.resolve(__dirname, 'tsconfig.json'),
      //   },
      // },
      // {
      //   test: /\.svelte$/,
      //   use: {
      //     loader: 'svelte-loader',
      //     options: {
      //       compilerOptions: {
      //         dev: !prod,
      //       },
      //       emitCss: prod,
      //       // @ts-ignore
      //       preprocess: require('svelte-preprocess')({}),
      //     },
      //   },
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devtool: prod ? false : 'source-map',
}
