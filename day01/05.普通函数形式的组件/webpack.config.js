const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
// 这个htmlPlugin作用: 自动生成一个新的html,在新的html文件中引入打包后的js文件

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
    new htmlPlugin({
      template: './index.html', // 复制这个html

      // 复制后的新的html文件名，复制到了output.path指定的位置
      filename: 'test.html', 
    })
  ]
}