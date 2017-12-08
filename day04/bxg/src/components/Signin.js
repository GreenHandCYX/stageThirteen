import React,{Component} from 'react'
import axios from 'axios'

export default class Signin extends Component{
  constructor(){
    super();


    //全局更改this指向
    this.handlerSubmit = this.handlerSubmit.bind(this)

    this.state={
      username:'',
      password:''
    }
  }
  handlerChange(e,key){
    // this.state[key]=e.target.value
    //可以在setState中通过[key]代表一个变量
   this.setState({[key]:e.target.value})
  }
  handlerSubmit(){
    const {username,password} = this.state;
    axios.post('http://bxg.huoqishi.net/signin',{username,password}).then(
      ({data:{user}})=>{
        //将登录成功的用户信息存到本地缓存
        localStorage.setItem('userinfo',JSON.stringify(user))
        //跳转到首页
       this.props.history.push({pathname:'/home'})
      }
    )
  }
  render(){
    return (
      <div className="login">
        <div className="login-wrap">
            <div className="avatar">
                <img src="../../assets/img/monkey.png" className="img-circle" alt="" />
            </div>
            <form onSubmit={this.handlerSubmit} className="col-xs-offset-1 col-xs-10">
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <i className="fa fa-user"></i>
                    </span>
                    <input id="name" type="text" className="form-control" placeholder="用户名"
                    onChange={e => { this.handlerChange(e, 'username') }}
                    value={this.state.username} />
                </div>
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <i className="fa fa-key"></i>
                    </span>
                    <input id="pass" type="password" className="form-control" placeholder="密码"
                    onChange={e => { this.handlerChange(e, 'password')}}
                    value={this.state.password} />
                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block">登 录</button>
            </form>
        </div>
    </div>
    )
  }
}