const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const hp = new HtmlPlugin({
  template: './index.html',
  filename: 'index.html'
})
// 这个htmlPlugin作用: 自动生成一个新的html,在新的html文件中引入打包后的js文件
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'hebing.js'
  },
  module: {
    // loaders
    // rules
    // 配置让其他的第三方包来处理非js后缀的文件
    //将jsx语法解析为es5
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/, // 忽略,不处理 node_modules中的js文件
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)$/,
        loader: 'file-loader'
      },
    ]
  },
  plugins: [
    hp,
    //在webpack中拷贝文件和文件夹
    new CopyWebpackPlugin([
      {from: './src/assets', to: './assets'}
    ])
  ]
}