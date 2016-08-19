const consts = require('./utils/consts')
const config = require('./utils/config')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: consts.SRC,
    port: consts.PORT
  },
  entry: [
    'webpack-dev-server/client?http://localhost:81',
    'webpack/hot/only-dev-server',
    path.resolve(consts.ENTRY)
  ],
  output: {
    path: path.resolve(consts.DIST),
    publicPath: '/',
    filename: '[id].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: [
          path.resolve('src/app'),
          path.resolve('src/components')
        ],
        loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]!sass!postcss'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style!css'
      },
      ...config.module.loaders
    ]
  },
  sassLoader: config.sassLoader,
  postcss: function () {
    return [
      require('postcss-browser-reporter'),
      require('postcss-reporter'),
      ...config.postcss
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({
      url: `http://localhost:${consts.PORT}`
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    ...config.plugins
  ],
  resolve: config.resolve
}
