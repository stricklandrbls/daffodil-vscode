/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//@ts-check
'use strict'

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

const entry = path.resolve(__dirname, 'src', 'views', 'dataEditor', 'index.ts')
const buildDir = path.resolve(__dirname, './dist')
// const svelteInclude = path.dirname(require.resolve('svelte/package.json'))
const svelteInclude = path.resolve('node_modules', 'svelte/src')
const appHTML = path.resolve(__dirname, 'src/index.html')
const indexHTML = path.resolve(buildDir, 'index.html')
const sveltePreprocess = require('svelte-preprocess')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => /** @type WebpackConfig */ {
  const isDev = !!(env && env.development)

  return {
    //   mode: 'none',
    //   entry: {
    //     index: path.resolve(__dirname, './src/views/dataEditor/index.ts'),
    //   },
    //   resolve: {
    //     alias: {
    //       svelte: path.resolve(__dirname, '../../', 'node_modules', 'svelte'),
    //       src: path.resolve(__dirname, 'src'),
    //     },
    //     extensions: ['.ts', '.mjs', '.js', '.css', '.svelte'],
    //     mainFields: ['svelte', 'browser', 'module', 'main'],
    //     conditionNames: ['svelte', 'browser', 'import'],
    //   },
    //   module: {
    //     rules: [
    //       {
    //         test: /\.ts$/,
    //         exclude: /node_modules/,
    //         loader: 'ts-loader',
    //         options: {
    //           transpileOnly: true,
    //           configFile: path.resolve(__dirname, 'tsconfig.json'),
    //         },
    //       },
    //       {
    //         test: /\.svelte$/,
    //         loader: 'svelte-loader',
    //         options: {
    //           compilerOptions: {
    //             dev: isDev,
    //             runes: false,
    //           },

    //           emitCss: true,
    //           // @ts-ignore
    //           preprocess: require('svelte-preprocess')({}),
    //           onwarn: (_warning, _handler) => {}, // ignore warning mostly for stuff not being defined since they are passed in
    //         },
    //       },
    //       {
    //         // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
    //         test: /node_modules\/svelte\/.*\.mjs$/,
    //         resolve: {
    //           fullySpecified: false,
    //         },
    //       },
    //       {
    //         test: /\.css$/,
    //         sideEffects: true, // So we don't remove global css
    //         use: [
    //           {
    //             loader: MiniCssExtractPlugin.loader,
    //           },
    //           {
    //             loader: 'css-loader',
    //             options: {
    //               sourceMap: isDev,
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },

    //   output: {
    //     path: path.resolve(__dirname, '../../', 'dist', 'views', 'dataEditor'),
    //     filename: 'index.js',
    //     clean: true,
    //     libraryTarget: 'commonjs2',
    //   },

    //   devtool: isDev ? 'source-map' : false,

    //   plugins: [
    //     new MiniCssExtractPlugin({
    //       filename: '../../styles.css',
    //       chunkFilename: '../../styles.css',
    //     }),
    //   ],
    //   optimization: {
    //     minimize: !isDev,
    //     minimizer: ['...', new CssMinimizerPlugin()],
    //     usedExports: true,
    //   },
    // }
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
        // 'svelte/internal': path.dirname(
        //   require.resolve('../svelte/package.json') + '/internal'
        // ),
      },
      extensions: ['.mjs', '.js', '.ts', '.svelte', '.d.ts'],
      conditionNames: ['browser', 'svelte', 'svelte/legacy'],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                customElement: true,
                hydratable: true,
                runes: false,
              }, // Svelte5 REQURIED
              // preprocess: require('svelte-preprocess')(),
              preprocess: sveltePreprocess,
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
        {
          test: /\.mjs$/,
          type: 'javascript/auto',
        },
      ],
    },
    optimization: { usedExports: true },
    plugins: [
      new HtmlWebpackPlugin({
        template: appHTML,
        filename: indexHTML,
        inject: 'body',
      }),
    ],
  }
}
