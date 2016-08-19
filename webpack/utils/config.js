const HtmlWebpackPlugin = require('html-webpack-plugin')
const consts = require('./consts')
const path = require('path')

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
    includePaths: ['src']
  },
  postcss: [
    require('postcss-font-magician')(),
    require('cssnano')({
      filterPlugins: false,
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
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
    extensions: ['', '.js', '.jsx', '.html', '.css', '.scss'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}

module.exports = config
