/**
 * 这个是两人聊天的界面组件
 */
import React from 'react'

// const a = 1
export default class Chat extends React.Component {
  componentWillMount(){
    console.log(this.props.match.params.id)
  }
  render () {
    // this.props.match.params.id 根据这个id 到服务器
    // 或者缓存中出去聊天记录展示出来
    return (
      <div className="dialogue sub-page">
        <header id="wx-header">
          <div className="other">
            <a className="iconfont icon-chat-group"
              ></a>
            <a className="iconfont icon-chat-friends"></a>
          </div>
          <div className="center">
            <a className="iconfont icon-return-arrow">
              <span>微信: </span>
            </a>
            <span>小明明:</span>
            <span className="parentheses" >组名</span>
          </div>
        </header>
        <section className="dialogue-section clearfix" >
          <div className="row clearfix" >
            <img src="../assets/images/users/huoqishi.jpeg" className="header" />
            <p className="text" >嘻嘻</p>
          </div>
          <span className="msg-more" id="msg-more"><ul>
                        <li>复制</li>
                        <li>转发</li>
                        <li>收藏</li>
                        <li>删除</li>
                    </ul></span>
        </section>
        <footer className="dialogue-footer">
          <div className="component-dialogue-bar-person">
            <span className="iconfont icon-dialogue-jianpan"></span>
            <span className="iconfont icon-dialogue-voice"></span>
            <div className="chat-way">
              <div className="chat-say">
                <span className="one">按住 说话</span>
                <span className="two">松开 结束</span>
              </div>
            </div>
            <div className="chat-way">
              <input className="chat-txt" type="text" />
            </div>
            <span className="expression iconfont icon-dialogue-smile"></span>
            <span className="more iconfont icon-dialogue-jia"></span>
            <div className="recording" style={{display: 'none'}} id="recording">
              <div className="recording-voice" style={{display: 'none'}} id="recording-voice">
                <div className="voice-inner">
                  <div className="voice-icon"></div>
                  <div className="voice-volume">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <p>手指上划,取消发送</p>
              </div>
              <div className="recording-cancel" style={{display: 'none'}}>
                <div className="cancel-inner"></div>
                <p>松开手指,取消发送</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      )
  }
}