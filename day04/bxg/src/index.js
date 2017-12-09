import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'



import Signin from './components/Signin' 
import Home from './components/Home'



import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
import './assets/css/index.css'



//全局处理axios
//cors跨域默认不会发送cookie
//通过axios的请求拦截器设置发送cookie，可以进行session验证登录
axios.interceptors.request.use(config=>{
  nprogress.start()


  config.withCredentials = true
  return config;
})
//因为该项目的每个响应都有errcode!=0时的情况
//所以可以通过响应拦截器进行全局设置
axios.interceptors.response.use(res=>{
  nprogress.done()

console.dir(Promise)
   //返回一个Promise.reject可以阻断axios.then的第一个参数回调方法的执行
  return new Promise((resolve,reject) =>{
    if(res.data.errcode!==0){
      alert(res.data.errmsg)
       reject(res)
    }
    resolve(res)
  });
})



class App extends React.Component {
  render(){
    //设置主路由控制登录和主页
    return (
      <HashRouter>
        <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/home' component={Home} />
          <Redirect to='/signin'/>
        </Switch>
      </HashRouter>
    )
  }
}

ReactDom.render(<App />,document.querySelector('#box'))