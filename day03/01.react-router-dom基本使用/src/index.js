import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, BrowserRouter, Route, NavLink, Link} from 'react-router-dom' // 这个包中封装了很多组件
// 1.监听hash值的变化 HashRouter
// 2.根据我们组件的规则呈现不同的组件 Route
// 使用要求: 
// a.组件根元素需要使用HashRouter包裹
// b.HashRouter组件标签中间只能有一个根元素
// 了解.history.pushState(null, null, '地址') // 可以改变地址但是不刷新页面

// 首页组件
const Home = () => (
 <div>
  <h1>首页组件</h1>
</div>)

const User = (props) => {
  function handlerClick () {
    // 导航到Home
    console.log(props)
    props.history.push({pathname: '/home/xx/ss'})
  }
 return (<div>
  <button onClick={e => { handlerClick()}}>导航到Home</button>
  <h1>用户组件</h1>
</div>)
}

const Test = () => (<h1>我是Test</h1>)
const App = (props) => {
  return (
    <Router>
      <div>
        <Link to="/home/xx/ss">首页</Link> <br/>
        <Link to="/user">用户</Link> <br/>
        <NavLink activeClassName='test' to="/user">NaveLink用户页面</NavLink>
        <h1>ddd</h1>
        {
          // 默认匹配是模糊匹配只要锚点中是以这个path开头这个组件就会呈现
          // 可以通过添加exact属性来在达到精确匹配的效果
          // <Route exact /> 或者 <Route exact={true} />
        }
        <Route exact={true} path='/home' component={Test}/>

        <Route path='/home/xx/ss' component={Home}/>
        <h1>dddffff</h1>
        <Route path='/user' component={User}/>
      </div>
    </Router>
    )
}

ReactDOM.render( <App />, document.querySelector('#box'))
