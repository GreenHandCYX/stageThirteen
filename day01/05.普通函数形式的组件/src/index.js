// 1. 引包 react 和 react-dom
// 2. 定义一个 react 元素
// 3. 调用 react-dom中 的 render 方法,将2中的元素添加到DOM中

import React from 'react'
import ReactDOM from 'react-dom'

// 定义组件(普通函数的形式)
function Btn (props) {
  console.log(typeof props.age)
  const element = <div><h1>我是{props.name}，我今年{props.age}岁了,
  我是一个{props.sex}孩
  </h1></div>
  return element
}
// Btn()
// Btn()
// 参数2: 是dom对象
// ReactDOM.render(Btn({name: '小明', age: 18, sex:'屁'}), document.querySelector('#box'))

// 如果写在 标签形式，默认会将 标签上的属性组成一个对象,
// 并把这个对象作为Btn 方法的参数传递
ReactDOM.render( <Btn name={'小明'} age={ 28 } sex='屁' />, document.querySelector('#box'))

