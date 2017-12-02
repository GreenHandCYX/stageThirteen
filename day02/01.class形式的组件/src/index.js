import React from 'react'
import ReactDOM from 'react-dom'

const age = 18
// 使用类定义一个组件
// render方法， render中返回 React 元素, 继承React.Component
class App extends React.Component{
  constructor () {
    super()
    this.state = {
      age: 18,
      sex: '男'
    }
    // this.setState({})
  }
  render () {
    // 每次页面中渲染出的内容是这个函数中 return 的内容
    return (
      <div>
        <button onClick={e => this.clickHandler()}>更新页面</button>
        嘻嘻
        {this.state.age}
      </div>
      )
    // return {
    //   type: 'div',
    //   props: {
    //     children: `嘻嘻${age}`
    //   }
    // }
  }
  clickHandler () {
    // console.log()
    // this.state.age = Math.random()
    // this.setState({})

    // setState参数中的属性会覆盖this.state中的同名属性
    this.setState({age: Math.random()})
    // 当我们调用 setState时，它会先更新 this.state中的数据
    // 然后再调用当前组件的 render方法，得到新的dom结构， 并渲染出来
  }
}

ReactDOM.render( <App></App>, document.querySelector('#box'))

