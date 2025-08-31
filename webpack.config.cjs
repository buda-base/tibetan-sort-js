/* global __dirname, require, module */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const libraryName = 'tibetan-sort-js';

module.exports = {
  entry: path.join(__dirname, 'src/tibetan-sort-js.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js', // was undefined before
    library: {
      name: libraryName,
      type: 'umd',       // works in Node, browser, bundlers
    },
    globalObject: 'this', // safe global for webworkers/node
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.json'],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js'],
      failOnError: true,   // keep failing build on lint errors (optional)
    }),
  ],
};
