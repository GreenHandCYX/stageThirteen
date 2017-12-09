// 需要三个组件，爷爷直接给孙子传递数据(不一定是孙子，只要是子辈都可以)
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
class ErZi extends React.Component {
  render () {
    this.context.testFn()
    return (
      <div>我是儿子： 我爷爷今年: {this.context.username}</div>
      )
  }
}
// 3.
ErZi.contextTypes = {
  username: PropTypes.string,
  testFn: PropTypes.function
}
class FuQin extends React.Component {
  render () {
    return (
      <div>
         <h1>我是父亲</h1>
         <ErZi></ErZi>
      </div>
      )
  }
}

class YeYe extends React.Component {
  constructor(){
    super()
    this.state ={
      username:'YEYE'
    }
  }
  render () {
    // const age = '998'
    return (
      <div>
        
        <h1>我是爷爷{this.state.username}</h1>
        <FuQin></FuQin>
      </div>
      )
  }
  testFn (val) {
    alert('123')
    // this.setState({username:val})
  }
  //添加了这个方法就可以在所有子辈上访问这个顶级父类的方法或属性了
  //但是需限制这个方法传递的参数的格式
  //通过prop-types组件实现限制
      //发送数据方设置childContextTypes
      //接收数据方设置contextTypes
  //只要满足限制的组件才能绑定传递数据的方法
  getChildContext () {
    return {
      username:this.state.username,
      testFn: (val) => {
        // this.testFn(val)
        this.testFn()
      }
    }
  }
}
// 2.
YeYe.childContextTypes = {
  // 限制这里传递的age必需是string格式
  username: PropTypes.string,
  testFn: PropTypes.function
}
ReactDOM.render(<YeYe></YeYe>, document.querySelector('#box'))

// 传递的步骤:
// 1.在爷爷组件中添加一个 getChildContext 原型方法,
// 并且返回一个，要传递的数据在对象存储 (这个方法是在render后被调用)
// 2.要给爷爷组件这个类, YeYe 添加一个 childContextTypes 属性,用来限制
// 传递给子组件的数据的格式: 需要下载一个包： `npm i prop-types -S`
// 3.在要接收数据的子组件中给组件添加一个 contextTypes属性，用来限制接收的数据
// 的格式
// 上面3步之后，就可以在子组件中使用 this.context 来获取爷爷组件传递的数据
