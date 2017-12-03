import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'

// Home 组件
// User 组件 
// Home, User 是同级组件
// Home 组件中
  // Chat组件
  // Concat 组件
    // Find 组件

const Chat = () => {return (<h1>我是Chat</h1>)}
const Concat = () => {return (<h1>我是Concat</h1>)}
const Find = () => {return (<h1>我是Find</h1>)}
const User = () => {return (<h1>我是User</h1>)}

const Home = (props) => {
  const {path} = props.match
  // console.log(props.match)
  return (
    <div>
        <h1>这是Home组件</h1>
         {
           // hash要以 /chat 开头，才呈现这个Chat组件
           // 如果这里是以 /chat 开头匹配的话, 即使hash是#/chat,这个Chat组件也不会显示:
           // 原因: Chat是包含在Home组件，Home匹配的规则是 /home, 不符合条件，Home不显示。
           // 则Home的子组件也不显示!
         }
         {
          // if (hash 匹配 '/home/chat') {
          //   <Chat></Chat>
          // }
         }
         <Route path={`${path}/chat`} component={Chat}/>
         <Route path={`${path}/concat`} component={Concat} />
         <Route path={`${path}/find`} component={Find} />
    </div>
  )
}

const App = () => {
  return (
    <HashRouter>
      <div>
        <Route  path="/home" component={Home}/>
        <Route path="/user" component={User} />
      </div>
    </HashRouter>
  )
}
// ReactDOM.render(<App/>, dom对象)

ReactDOM.render(<App/>, document.querySelector('#box'))
