import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Redirect, Switch, Route, Link} from 'react-router-dom'

const Chat = () => {return (<h1>我是Chat</h1>)}
const Concat = () => {return (<h1>我是Concat</h1>)}
const Find = () => {return (<h1>我是Find</h1>)}
const User = () => {return (<h1>我是User</h1>)}
const Four0Four = () => {return (<h1>我是404</h1>)}
const Home = () => <h1>我是首页</h1>

// Redirect 作用本身是立即跳转到指定路由
// 可以和Switch组件配合使用
// 可以把 Route 包裹在 Switch
// 如果Redirect包裹在Switch中,则当Switch中所有的路由都不匹配时
// Readirec才执行跳转
const App = () => {
  return (
    <HashRouter>
      <div>
        <h1>#/</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/chat' component={Chat}/>
          <Route path='/concat' component={Concat}/>
          <Route path='/find' component={Find}/>
          <Route path='/user' component={User}/>
          <Route path='/404' component={Four0Four} />
          <Redirect to='/404' />
        </Switch>
      </div>
    </HashRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('#box'))
