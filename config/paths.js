const path = require('path');

module.exports = {
  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Sourcecode files
  src: path.resolve(__dirname, '../src'),

  // Static files
  public: path.resolve(__dirname, '../public'),
}