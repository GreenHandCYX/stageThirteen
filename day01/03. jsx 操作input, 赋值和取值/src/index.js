// 1. 引包 react, react-dom
// 2. 定义 react 元素
// 3. 渲染元素
import React from 'react'
import ReactDOM from 'react-dom'

// react 元素第一个标签不要换行
// 如果非要换行 ，就在 标签包层添加一个 ()
// var a =  (1 + 1) *3
// **注意使用 value属性给 input 赋值，默认它是只读的!, 不能修改**
// 如果要修改这个值: 
//  a. 调用 render 重新渲染(给input 一个新的value)
//  b. 组件中有自己的更新方式

let msg = '我是中国人，我爱自己的祖国'
const element = (
<div>
  <input value={ msg }/>
</div>)

ReactDOM.render(element, document.querySelector('#box'))


setTimeout(function () {
  msg = '你好吗'
const element = (<div>
  <input value={ msg }/>
</div>)
  ReactDOM.render(element, document.querySelector('#box'))
}, 3000)