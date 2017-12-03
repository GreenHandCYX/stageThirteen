//主页组件
import React,{Component} from 'react'
import {Route,NavLink} from 'react-router-dom'

import '../assets/style.css'

import ChatList from './ChatList.js'
import Concat from './Concat.js'
import Find from './Find.js'
import Mine from './Mine.js'

export default class Home extends Component{
    constructor(){
        super();
      
    }
    render(){
        //获取父路由
        const {path} = this.props.match

        return (
            <div id="app">
                <div className="outter">  
                <header className="app-header">  
                    <div id="wx-header">    
                    <div className="other">   
                        <span className="iconfont icon-tips-jia"></span>
                        <ul className="tips-close tips-menu">
                        <li>
                            <span className="iconfont icon-tips-xiaoxi"></span>
                            <div>发起群聊</div>
                        </li>
                        <a tag="li">
                            <span className="iconfont icon-tips-add-friend"></span>
                            <div>添加朋友</div>
                        </a>
                        <li> <span className="iconfont icon-tips-saoyisao"></span>
                            <div>扫一扫</div>
                        </li>
                        <li> <span className="iconfont icon-tips-fukuan"></span>
                            <div>收付款</div>
                        </li>
                        </ul>  
                    </div>
                    <div className="center">    
                        <span>嘻嘻</span>
                        <span className="parentheses">998</span>
                    </div>
                    </div>
                </header>
                <Route path={`${path}/chatlist`} component={ChatList} />
                <Route path={`${path}/concat`} component={Concat} />
                <Route path={`${path}/find`} component={Find} />
                <Route path={`${path}/mine`} component={Mine} />
                <footer className="app-footer">
                <div id="wx-nav">
                    <nav>
                    <NavLink to={`${path}/chatlist`} activeClassName='active' tag="dl" exact>
                        <dl>
                        <dt className="iconfont icon-wechat">
                            <i className="new-msg-count">18</i>
                        </dt>
                        <dd>微信</dd>
                        </dl>
                    </NavLink>
                    <NavLink to={`${path}/concat`} tag="dl">
                        <dl>
                        <dt className="iconfont icon-contact">
                            <i className="new-msg-count">2</i>
                        </dt>
                        <dd>通讯录</dd>
                        </dl>
                    </NavLink>
                    <NavLink to={`${path}/find`} tag="dl">
                        <dl>
                        <dt className="iconfont icon-find">
                            <i className="new-msg-dot"></i>
                        </dt>
                        <dd>发现</dd>
                        </dl>
                    </NavLink>
                    <NavLink to={`${path}/mine`} tag="dl">
                        <dl>
                        <dt className="iconfont icon-me">
                            <i className="new-msg-dot"></i>
                        </dt>
                        <dd>我</dd>
                        </dl>
                    </NavLink>
                    </nav>
                </div>
                </footer>
            </div>
        </div>
        )
    }
  
}