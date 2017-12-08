import React,{Component} from 'react'
import axios from 'axios';




export default class TecEdit extends Component{
  constructor(){
    super()
    this.state = {
      teacher:{}
    }
  }
  componentDidMount(){
    this.getTecInfo()
  }
  getTecInfo(){
    const {id} = this.props.match.params
    axios.get('http://bxg.huoqishi.net/teachers/edit', {
      params: {_id: id}
    }).then( ({data}) => {
      this.setState({teacher: data.teacher})
    })
  }
  handlerChange(e,key){
    this.state.teacher[key] = e.target.value
    this.setState({})
  }
  handlerSave(){
    const {teacher} = this.state
    axios.post('http://bxg.huoqishi.net/teachers/edit' , teacher)
    .then( ({data}) => {
      alert('更新成功!')
    })
  }
  render(){
    const {teacher:tec} = this.state
    return ( 
        <div className="body teacher">
        
          <ol className="breadcrumb">
            <li><a href="javascript:;">讲师管理</a></li>
            <li className="active">讲师添加</li>
          </ol>
          <div className="teacher-add">
            <form action="" className="form-horizontal col-xs-offset-2">
              <div className="form-group">
                <label htmlFor="" className="col-xs-3 control-label">姓名</label>
                <div className="col-xs-4">
                  <input
                    onChange={e => this.handlerChange(e, 'username')}
                    value={tec.username}
                    type="text" className="form-control input-sm" placeholder="讲师名称" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-xs-3 control-label">入职时间</label>
                <div className="col-xs-4">
                  <input
                    onChange={e => this.handlerChange(e, 'joinDate')}
                    value={tec.joinDate}
                    type="text" className="form-control input-sm" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-xs-3 control-label">类型</label>
                <div className="col-xs-2">
                  <select
                    onChange={e => this.handlerChange(e, 'type')}
                    value={tec.type}
                    name="" className="form-control input-sm">
                    <option value="0">讲师</option>
                    <option value="1">管理员</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-xs-3 control-label">性别</label>
                <div className="col-xs-4">
                  <label className="radio-inline">
                    <input
                      onChange={e => this.handlerChange(e, 'gender')}
                      value={tec.gender}
                      checked={tec.gender == 0}
                      type="radio" /> 男
                                  </label>
                  <label className="radio-inline">
                    <input
                      onChange={e => this.handlerChange(e, 'gender')}
                      value={tec.gender}
                      checked={tec.gender == 1}
                      type="radio" /> 女
                                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-7">
                  <a
                    onClick={e => this.handlerSave()}
                    className="btn btn-success btn-sm pull-right"> 保 存 </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
  }
}