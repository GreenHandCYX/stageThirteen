//登录组件
import React,{Component} from 'react'
export default class Signin extends Component{
    constructor(){
        super();
        //在全局更改this指向
        this.handlerClick = this.handlerClick.bind(this)
    }
    render(){
        return (
            <div>
            <h1>我是登陆组件SignIn</h1>
            <button onClick={this.handlerClick}>登陆</button>
          </div>
        )
    }
    handlerClick(){
        //js控制路由导航通过this.props.history.push
        this.props.history.push({pathname:'/home'})
    }
}