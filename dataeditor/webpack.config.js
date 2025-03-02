const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'dataeditor.js',
    path: path.resolve(__dirname, './public'),
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte/src/runtime'),
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
            preprocess: require('svelte-preprocess')(),
          },
        },
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}
