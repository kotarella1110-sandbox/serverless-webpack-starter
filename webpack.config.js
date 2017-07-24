const path = require('path');
const globEntry = require('webpack-glob-entry');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: globEntry(globEntry.basePath(path.resolve(__dirname, 'functions')), path.resolve(__dirname, 'functions/**/handler.js')),
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
};
