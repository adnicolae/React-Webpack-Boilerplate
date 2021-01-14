const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control source map generation tool
  devtool: 'inline-source-map',

  // Setup dev server
  devServer: {
    contentBase: paths.build,
    compress: true
  }
})