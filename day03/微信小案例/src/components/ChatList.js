/**
 * 聊天列表组件
 */
 import React from 'react'
 import {Link} from 'react-router-dom'
 import store from '../redux/store'
 import act from '../redux/actions'
const ActionType = act.ActionType;
 export default class ChatList extends React.Component {
  constructor () {
    super()
  }
  delHandler(e,arg){
   e.stopPropagation()
    store.dispatch(act.Del(arg))
    
  }
  render () {
    const {chatList} = store.getState()
    
    return (
      <section className="app-content">
        <div id="wechat">
          <ul className="wechat-list">
            {
              chatList.map(item=>{
                return (
                  <li  className="list-row" key={item.id}>
                  <Link to={`/chat/${item.id}`} className="list-info">
                    <div className="header-box">
                      <i className="new-msg-count" >97</i>                             
                      <div className="header">
                        <img src="./assets/images/users/huoqishi.jpeg" />                
                      </div>
                    </div>
                    <div className="desc-box">             
                      <div className="desc-time"></div>
                      <button onClick={e=>this.delHandler(e,item.id)}>删除</button>                
                      <div className="desc-author">{item.msg}</div>
                      <div className="desc-msg">
                        <div className="desc-mute iconfont icon-mute">
                        </div>
                        <span>[18条消息]</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </Link>
                </li>
                )
              })
            }
          
          </ul>
        </div>
      </section>
      )
  }
 }