import React from 'react'
import ReactDOM from 'react-dom'

class Son extends React.Component {
  constructor () {
    super()
    this.state = {
      money: '$998'
    }
  }
  render () {
    return <div>嘻嘻<button onClick={ e => this.clickHandler()}>传递数据给父组件</button></div>
  }
  clickHandler () {
    // 在这个方法中将money传递给父亲
    alert('执行了!')
    // console.log(this.props)
    // 第三步，在子组件中调用父组件传递过来的方法(并给方法传递参数)
    this.props.cm(Math.random())
  }
}

class Father extends React.Component {
  constructor() {
    super()
    this.state = {
      money: '我没有钱，都用来养育孩子了!'
    }
  }
  render () {
    return (
      <div>
        <h1>我是父组件 {this.state.money}</h1>
        {
          // 第二步，将定义好的方法传递给子组件
        }
        <Son cm={ (arg) => {this.changeMoney(arg)}}></Son>
        {
          // var s = new Son()
          // s.props = {cm: e => {this.changeMoney()}}
          // s.render()
        }
      </div>
      )
  }
  // 第一步，在父组件中定义一个方法
  // 用于修改父组件中的数据
  changeMoney (newMoney) {
    this.state.money = newMoney
    this.setState({})
  }
}

ReactDOM.render( <Father></Father>, document.querySelector('#box'))