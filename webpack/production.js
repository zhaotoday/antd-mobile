const config = require('./utils/config')
const consts = require('./utils/consts')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    path.resolve(consts.ENTRY)
  ],
  output: {
    path: path.resolve(consts.DIST),
    publicPath: consts.CDN,
    filename: '[id].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: [
          path.resolve('src/app'),
          path.resolve('src/components')
        ],
        loader: 'style!css?modules&localIdentName=[hash:base64:5]!sass!postcss'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      ...config.module.loaders
    ]
  },
  sassLoader: config.sassLoader,
  postcss: function () {
    return config.postcss
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].css'),
    ...config.plugins
  ],
  resolve: config.resolve
}
