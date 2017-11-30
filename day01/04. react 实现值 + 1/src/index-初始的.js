// 1. 引包 react 和 react-dom
// 2. 定义一个 react 元素
// 3. 调用 react-dom中 的 render 方法,将2中的元素添加到DOM中

import React from 'react'
import ReactDOM from 'react-dom'

// 需求:
// 希望给这个第二个input 默认值: '我是中国人'
// 当我们修改这个 input 时，能够取出这个 新的值

let msg = '我是中国人'
let num = 1
// 定义一个方法
function test () {
  // *react 元素必需有一个根元素*
  const element = (
    <div>
      <input type="text" value={num}/>
      <input
      onChange={ function (event) {
        console.log(event.target.value)
        msg = event.target.value
        test()
      }}

      type="text" value={msg}/>
      <button onClick={
        function () {
          // 要更新 input 中的值
          // a. 重新调用 render
          // b. 给 input 绑定一个新的值
          // alert(num)
          num += 1
          test()
        }
      }>值 + 1</button>
    </div>
    )
  ReactDOM.render(element, document.querySelector('#box'))
}
test()
