// 1. 引包 react和 react-dom
// 2. 定义一个 react 元素
// 3. 将 react 元素渲染到页面指定位置

import React from 'react'
import ReactDOM from 'react-dom'

const element = <button
                  onClick={ function () {alert(998)}  }
                  >我是按钮，哈哈</button>

function handler (msg) {
  alert(msg)
  alert('我是中国人，我爱自己的祖国!')
  // return undefined
}

const element2 = <button onClick={ function () { handler('嘻嘻') } }>我是按钮，哈哈</button>
const element3 = <button onClick={  () => { handler('嘻嘻') } }>我是按钮，哈哈</button>

const elementAll = <div>
  <div>{element}</div>
  {element2}
  {element3}
</div>

ReactDOM.render(elementAll, document.querySelector('#box'))