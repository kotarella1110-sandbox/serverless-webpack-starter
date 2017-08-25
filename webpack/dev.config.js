const webpackMerge = require('webpack-merge');

const webpackCommon = require('./common.config');

module.exports = webpackMerge(webpackCommon, {
  devtool: 'inline-source-map',
});
