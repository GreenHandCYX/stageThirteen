import React,{Component} from 'react'
import {HashRouter,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import axios from 'axios';


import DashBoard from './DashBoard' 
import TecList from './TecList' 
import TecAdd from './TecAdd' 
import TecEdit from './TecEdit' 

export default class Home extends Component{
  constructor(){
    super();
    this.state={
      user:{},
      showCourse:false,
      showSystem:false
    }
    this.renderCourseMenu = this.renderCourseMenu.bind(this)
  }

  renderCourseMenu(){
    //是否显示课程操作列表
    if(!this.state.showCourse) return null;
    return (
        <ul className="list-unstyled">
          <li>
            <a href="../course/add.html">
              课程添加
            </a>
          </li>
          <li>
            <a href="../course/list.html">
              课程列表
            </a>
          </li>
          <li>
            <a href="../course/category.html">
              课程分类
            </a>
          </li>
          <li>
            <a href="../course/topic.html">
              课程专题
            </a>
          </li>
        </ul>
    )
  }

  componentDidMount(){
    //获取当前用户信息
    this.getUserInfo()
  }
  getUserInfo(){
    //获取本地数据
    const user = JSON.parse(localStorage.getItem('userinfo') )|| ''
  
    if(!user){
      console.log(user)
      return this.props.history.push({pathname:'/signin'})
    }
    this.setState({user})
  }
  render(){
    const {match:{path}} = this.props
    const {user,showCourse,showSystem} = this.state
    return (
      <div>
        <div className="aside">

          <div className="profile">

            <div className="avatar img-circle">
              <img src={user.avatar} />
            </div>
            <h4>{user.username}</h4>
          </div>

          <div className="navs">
            <ul className="list-unstyled">
              <li>
                <NavLink to={{pathname:'/home/dashboard'}} activeClassName="active">
                  <i className="fa fa-home"></i>
                  仪表盘
                    </NavLink>
              </li>
              <li>
                <a href="../user/list.html">
                  <i className="fa fa-bell"></i>
                  用户管理
                    </a>
              </li>
              <li>
                <NavLink to={{ pathname: '/home/teclist' }} activeClassName="active">
                  <i className="fa fa-bell"></i>
                  讲师管理
                    </NavLink>
              </li>
              <li>
                <a
                  onClick={e=>this.setState({showCourse:!showCourse})}
                  href="javascript:;">
                  <i className="fa fa-cog"></i>
                  课程管理
                        <i className="arrow fa fa-angle-right"></i>
                </a>
                {
                  this.renderCourseMenu()
                }
              </li>
              <li>
                <a href="../advert/list.html">
                  <i className="fa fa-bell"></i>
                  广告管理
                    </a>
              </li>
              <li>
                <a
                 onClick={e=>this.setState({showSystem:!showSystem})}
                  href="javascript:;">
                  <i className="fa fa-cog"></i>
                  系统设置
                        <i className="arrow fa fa-angle-right"></i>
                </a>
                {
                  showSystem ? ( <ul className="list-unstyled">
                  <li>
                    <a href="javascript:;">
                      网站设置
                            </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      权限管理
                            </a>
                  </li>
                </ul>):null
                }
             
            
              </li>
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="container-fluid">

            <div className="header">
              <nav className="navbar navbar-custom">
                <div className="navbar-header">
                  <a href="javascript:;" className="navbar-brand">
                    <i className="fa fa-navicon"></i>
                  </a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-bell"></i>
                      <span className="badge">8</span>
                    </a>
                  </li>
                  <li>
                    <a href="../index/settings.html">
                      <i className="fa fa-user"></i>
                      个人中心
                            </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-sign-out"></i>
                      退出
                            </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-tasks"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <Switch>
            <Route path={`${path}/dashboard`} component={DashBoard} />
            <Route path={`${path}/teclist`} component={TecList} />
            <Route path={`${path}/tecadd`} component={TecAdd} />
            <Route path={`${path}/tecedit/:id`} component={TecEdit} />
            <Redirect exact to={{pathname:'/home/dashboard'}}></Redirect>
            </Switch>
            
          </div>
        </div>
      </div>
    )
  }
}