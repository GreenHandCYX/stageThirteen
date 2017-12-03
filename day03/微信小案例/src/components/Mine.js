/**
 * 聊天列表组件
 */
 import React from 'react'
 export default class Mine extends React.Component {
  render () {
    return (
      <section className="app-content">
        <div id="self">
          <div className="weui-tab__content" style={ {display: 'block'} }>
            <div className="weui-cells">
              <router-link to="/self/profile" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img src="./assets/images/users/huoqishi.jpeg" alt="" className="self-header" />
                </div>
                <div className="weui-cell__bd">
                  <h4 className="self-nickname">人在江湖</h4>

                  <p className="self-wxid">微信号: jianghuhaha</p>
                </div>
                <div className="weui-cell__ft">
                  <img src="./assets/images/chat-info-qr.png" />
                </div>
              </router-link>
            </div>
            <div className="weui-cells">
              <router-link to="/self/album" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img src="./assets/images/me_more-my-album.png" />
                </div>
                <div className="weui-cell__bd">
                  <p>相册</p>
                </div>
              </router-link>
              <router-link to="/self/album" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img src="./assets/images/me_more-my-favorites.png" />
                </div>
                <div className="weui-cell__bd">
                  <p>收藏</p>
                </div>
              </router-link>
              <router-link to="/self/album" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img src="./assets/images/me_more-my-bank-card.png" />
                </div>
                <div className="weui-cell__bd">
                  <p>钱包</p>
                </div>
              </router-link>
              <router-link to="/self/album" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img src="./assets/images/me_my-card-package-icon.png" />
                </div>
                <div className="weui-cell__bd">
                  <p>卡券</p>
                </div>
              </router-link>
            </div>
            <div className="weui-cells">
              <router-link to="/self/album" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img src="./assets/images/me_more-expression.png" />
                </div>
                <div className="weui-cell__bd">
                  <p>表情</p>
                </div>
              </router-link>
            </div>
            <div className="weui-cells">
              <router-link to="/self/settings" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img src="./assets/images/me_more-setting.png" />
                </div>
                <div className="weui-cell__bd">
                  <p>设置</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      )
  }
 }