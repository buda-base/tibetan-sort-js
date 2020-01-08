/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'tibetan-sort-js';

let plugins = [], outputFile;

const config = {
  entry: __dirname + '/src/tibetan-sort-js.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'global',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },

  plugins: plugins
};

module.exports = config;
