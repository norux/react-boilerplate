const merge = require('webpack-merge')
const path = require('path');
const webpackCommonConfig = require('./webpack.common.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true
        }
      },
      parallel: true
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: 'index.html',
      isMobile: false
    }),
    new HtmlWebpackPlugin({
      filename: 'mobile.html',
      template: 'index.html',
      isMobile: true
    })
  ]
})
