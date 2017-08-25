const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackCommon = require('./common.config');

module.exports = webpackMerge(webpackCommon, {
  bail: true,
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
  ],
});
