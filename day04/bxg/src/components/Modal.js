import React,{Component} from 'react'
import axios from 'axios';

import '../assets/css/modal.css'

export default class Modal extends Component{
  constructor(){
    super()
    this.state={
      teacher:{},
      showModal:false
    }
  }
  hideModal(){
    //同时置空数据
    this.setState({showModal:false,teacher:{}})

  }
  showModal(_id){
    this.setState({showModal:true})
    axios.get('http://bxg.huoqishi.net/teachers/' + _id)
    .then(({data}) => {
      // console.log(data)
      this.setState({teacher: data.teacher})
    })
  }

  render(){
    const {teacher:tec,showModal}=this.state
    return (
      <div className={'modal fade' + (showModal ? ' show-modal' : '')} id="teacherModal">
        <div className="modal-dialog" style={{ width: '750px' }}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <button
                onClick={e => this.hideModal()}
                type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="panel-title">讲师信息</h4>
            </div>
            <div className="panel-body">
              <table className="table table-bordered table-condensed">
                <tbody>
                  <tr>
                    <th>姓名:</th>
                    <td>{tec.username}</td>
                    <th>职位:</th>
                    <td colSpan="3">{!tec.type ? '讲师' : '管理员'}</td>
                    <td rowSpan="4" width="128">
                      <div className="avatar">
                        <img src={tec.avatar} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>花名:</th>
                    <td>{tec.nickname}</td>
                    <th>出生日期:</th>
                    <td colSpan="3">{tec.birthDay}</td>
                  </tr>
                  <tr>
                    <th>性别:</th>
                    <td>{!tec.gender ? '男' : '女'}</td>
                    <th>入职日期:</th>
                    <td colSpan="3">{tec.joinDate}</td>
                  </tr>
                  <tr>
                    <th>手机号码:</th>
                    <td colSpan="2">13051524959</td>
                    <th>邮箱:</th>
                    <td colSpan="2">zhaoyuchuan@itcast.cn</td>
                  </tr>
                  <tr>
                    <th>籍贯:</th>
                    <td colSpan="6">河北省 保定市 曲阳县</td>
                  </tr>
                  <tr>
                    <td colSpan="7">
                      <div className="introduce">
                        {tec.introduce}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}