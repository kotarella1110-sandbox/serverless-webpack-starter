const path = require('path');
const globEntry = require('webpack-glob-entry');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: globEntry(globEntry.basePath('./functions'), './functions/**/handler.js'),
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '../.webpack'),
    filename: '[name].js',
  },
};
