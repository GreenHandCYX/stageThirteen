
import React from 'react'

import axios from 'axios'
React.axios = axios

import ReactDom from 'react-dom'

//使用react-router-dom控制路由
//需要HashRouter(若是history格式则是BrowserRouter)和Route组件设置路由路径及跳转组件
//需要Switch和Redirect设置匹配不到的跳转路径
//需要Link和NavLink(带当前点击样式)设定路由导航
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'

// 引入css文件
import './assets/css/merge.css'
import './assets/css/lib/weui.min.css'
import './assets/css/lib/iconfont.css'

//引入组件
import Home from './components/Home'
import Signin from './components/Signin'
import Chat from './components/Chat'



class App extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/signin' component={Signin}></Route>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/chat/:id' component={Chat}></Route>
                        <Redirect to='/signin'></Redirect>
                    </Switch>   
                </div>
            </HashRouter>
        )
    }
} 

ReactDom.render(<App />,document.querySelector('#box'))