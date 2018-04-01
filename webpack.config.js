const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack3.0',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new ExtractTextPlugin('./css/style.css'),
    new CleanWebpackPlugin(["dist"])
  ],
  devServer: {
    port: 3000,
    open: true
  }
}