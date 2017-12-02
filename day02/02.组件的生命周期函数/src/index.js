
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      age: 18
    }
    console.log('我是: constructor')
  }
  //表示组件即将被渲染到DOM中
  componentWillMount () {
    console.log('我是: componentWillMount')
    this.state.age = 999
  }
  // 表示组件已经被渲染到DOM中
  componentDidMount () {
    console.log('我是: componentDidMount')
    // this.state.age = 998
    // this.setState({}) //
    setTimeout(() => {
      this.state.age = 998
      this.setState({})
    }, 3000)
  }
  // 表示组件即将被消毁(组件中render方法返回的标签即将要从dom中移除)
  componentWillUnmount () {
    console.log('我是: componentWillUnmount')
  }
  // 组件更新之前
  componentWillUpdate () {
    console.log('WillUpdate')
    // this.setState({})
  }
  // 组件更新之后
  componentDidUpdate () {
     console.log('DidUpdate')
     // this.setState({})
  }
  // this.setState() // componentWillUpdate render componentDidUpdate
  render () {
    // this.setState({age: 10})
    // if (false) {this.setState({})}
    console.log('我是: render')
    return (
      <div>
        <h1>我是小明明: {this.state.age}</h1>
        <button onClick={e => this.clickHandler()}>点击按钮</button>
      </div>
      )
  }
  clickHandler () {
    // console.log()
    // this.state.age = 1000
    this.setState({age: 1000})
  }
}

// const Test = () => <h1>我不是App组件</h1>
const Test = function () {
  return <h1>我不是App组件</h1>
}
ReactDOM.render(<App></App>, document.querySelector('#box'))


// setTimeout(function () {
//   ReactDOM.render(<Test></Test>, document.querySelector('#box'))
// }, 3000)
