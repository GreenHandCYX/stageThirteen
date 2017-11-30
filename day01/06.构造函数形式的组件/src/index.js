// 1. 引包 react 和 react-dom
// 2. 定义一个 react 元素
// 3. 调用 react-dom中 的 render 方法,将2中的元素添加到DOM中

import React from 'react'
import ReactDOM from 'react-dom'

// 构造函数形式的组件
// a. 必需要有一个 原型上的render, 实例属性上render也可以
// b. render 方法必需返回一个react元素
// c. 必需继承自己 React.Component

function Swiper () {
  this.render = function () {
    console.log(this.props)
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>哈哈dddd</li>
        <li>{this.props.age}</li>
      </ul>
      )
  }
}
Swiper.prototype = new React.Component()


// 参数2: 是dom对象
// ReactDOM.render( new Swiper().render(), document.querySelector('#box'))

ReactDOM.render( <Swiper name='i小明' age={18}> 嘻嘻，哈哈 </Swiper>, document.querySelector('#box'))
// ReactDOM.render( <Swiper name='i小明' age={18} />, document.querySelector('#box'))

// const sp = new Swiper()
// // 这个添加的props属性是固定的
// sp.props = {
//   name: 'i小明',
//   age: 18
// }
// ReactDOM.render( sp.render() , document.querySelector('#box'))