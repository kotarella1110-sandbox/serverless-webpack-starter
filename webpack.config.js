const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, 'functions/handler.js'),
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
};
