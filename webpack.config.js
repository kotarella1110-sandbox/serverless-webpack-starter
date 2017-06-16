var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    handler: path.join(__dirname, 'functions/handler.js'),
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: '.webpack',
    filename: '[name].js', // this should match the first part of function handler in serverless.yml
  },
  externals: [nodeExternals()],
  module: {
// https://github.com/elastic-coders/serverless-webpack/issues/118
//    preLoaders: [
//      {
//        test: /\.js$/,
//        loader: 'eslint-loader',
//        options: {
//          fix: true,
//          failOnError: true,
//        },
//        include: __dirname,
//        exclude: /node_modules/,
//      },
//    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: __dirname,
      },
    ],
  },
};

// https://github.com/elastic-coders/serverless-webpack/issues/113
//module.exports = {
//  entry: path.join(__dirname, 'functions/**/*.js'),
//  target: 'node',
//  externals: [nodeExternals()],
//  rules: {
//    loaders: [
//      {
//        enforce: 'pre',
//        test: /\.js$/,
//        loader: 'eslint-loader',
//        options: {
//          fix: true,
//          failOnError: true,
//        },
//        include: __dirname,
//        exclude: /node_modules/,
//      },
//      {
//        test: /\.js$/,
//        loader: 'babel-loader',
//        include: __dirname,
//        exclude: /node_modules/,
//      },
//    ],
//  },
//};
