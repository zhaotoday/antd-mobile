const HtmlWebpackPlugin = require('html-webpack-plugin')
const consts = require('./consts')
const path = require('path')
const pxtorem = require('postcss-pxtorem')

const config = {
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015&presets[]=react&presets[]=stage-1&plugins[]=transform-decorators-legacy'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192&name=images/[hash].[ext]'
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        loader: 'file?name=fonts/[hash].[ext]'
      },
      {
        test: /\.scss$/,
        include: [path.resolve('src/themes')],
        loader: 'style!css!sass!postcss'
      }
    ]
  },
  sassLoader: {
    includePaths: ['src', 'node_modules']
  },
  postcss: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
    require('postcss-font-magician')()
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: consts.TEMPLATE,
      title: consts.TITLE,
      filename: '../index.html',
      hash: true
    })
  ],
  resolve: {
    root: path.resolve(),
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.web.js', '.js', '.jsx', '.html', '.css', '.scss'],
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
  }
}

module.exports = config
