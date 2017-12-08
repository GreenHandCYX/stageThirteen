import React,{Component} from 'react'
import axios from 'axios';


export default class TecAdd extends Component{
  constructor(){
    super()
    this.state = {
     user:{
      username:'',
      password:'',
       joinDate:'', 
       type:0,
     gender:0
     }
    }
  }

  handlerChangeValue(e,key){
    //修改表单值
    this.state.user[key] = e.target.value
    this.setState({})
  }
  hanlderAdd(e){
    e.preventDefault();
    const {user} = this.state
    axios.post('http://bxg.huoqishi.net/teachers/new', user).then(({data})=>{
      alert(data.errmsg)
      //重置表单
      this.refs.myform.reset();
    })
  }

  render(){
    const {user: {username, password, joinDate, type, gender}} = this.state
    return (
      <div className="body teacher">
                <ol className="breadcrumb">
                    <li><a href="javascript:;">讲师管理</a></li>
                    <li className="active">讲师添加</li>
                </ol>
                <div className="teacher-add">
                    <form ref="myform" action="" className="form-horizontal col-xs-offset-2">
                        <div className="form-group">
                            <label htmlFor="" className="col-xs-3 control-label">姓名</label>
                            <div className="col-xs-4">
                                <input
                                onChange={ e => this.handlerChangeValue(e, 'username')}
                                value={username}
                                type="text" className="form-control input-sm" placeholder="讲师名称" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-xs-3 control-label">密码</label>
                            <div className="col-xs-4">
                                <input
                                onChange={ e => this.handlerChangeValue(e, 'password')}
                                value={password}
                                type="password" className="form-control input-sm" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-xs-3 control-label">入职时间</label>
                            <div className="col-xs-4">
                                <input
                                onChange={ e => this.handlerChangeValue(e, 'joinDate')}
                                value={joinDate}
                                type="text" className="form-control input-sm" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="col-xs-3 control-label">类型</label>
                            <div className="col-xs-2">
                                <select
                                onChange={ e => this.handlerChangeValue(e, 'type')}
                                value={type}  className="form-control input-sm">
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
                                    onChange={e => this.handlerChangeValue(e, 'gender')}
                                    type="radio" value="0" checked={gender == 0} /> 男
                                </label>
                                <label className="radio-inline">
                                    <input
                                    onChange={e => this.handlerChangeValue(e, 'gender')}
                                    type="radio" value="1" checked={gender == 1}/>  女
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-7">
                               
                                <a onClick={e => this.hanlderAdd(e)} className="btn btn-success btn-sm pull-right"> 添 加 </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
  }
}