'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const swcLoader = {
  loader: 'swc-loader',
  options: {
    jsc: {
      parser: {
        jsx : true
      },
    }
  }
};

/**
 * Base configuration for the CLI, core, and examples.
 */

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Default for boilerplate generation.
  output: {
    path: path.resolve('dist'),
    filename: 'deck.js'
  },
  devtool: 'source-map',
  module: {
    // Not we use `require.resolve` to make sure to use the loader installed
    // within _this_ project's `node_modules` traversal tree.
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [swcLoader]
      },
      // `.md` files are processed as pure text.
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      // `.mdx` files go through swc and our mdx transforming loader.
      {
        test: /\.mdx$/,
        exclude: /(node_modules)/,
        use: [swcLoader, 'spectacle-mdx-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  // Default for boilerplate generation.
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Spectacle presentation',
      template: './src/index.html'
    })
  ]
};
