var webpack = require('webpack');

var plugins = [];

var production = false;

if (production) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  );
}

var ExtractTextPlugin = require("extract-text-webpack-plugin");

plugins.push(new ExtractTextPlugin(
  "css/theme.css", {
    allChunks: true
  }
));

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
      path: './assets/',
      filename: 'js/theme.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },{
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
      },{
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!stylus-loader?sourceMap")
      }
    ]
  },
  devtool: 'sourcemap',
  plugins: plugins
};
