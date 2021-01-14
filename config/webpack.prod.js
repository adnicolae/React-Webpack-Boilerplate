const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'production',

  // Setup build optimization strategies
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
})