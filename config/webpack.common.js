const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = require('./paths');

module.exports = {
  // Application entry point for bundling
  entry: [paths.src + '/index.js'],

  // Assets and bundles output directory
  output: {
    path: paths.build,
    filename: '[name].js',
  },

  // Helpers to customize the webpack build process
  plugins: [
    // Generates HTML file from template
    new HtmlWebpackPlugin({
      template: paths.public + '/index.html',
      filename: "index.html",
      title: 'React Webpack Boilerplate'
    }),

    // Cleans build folder on rebuild
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // Use sass-loader to transpile SCSS files
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      // Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
}