import React,{Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
//引入模态框
import Modal from './Modal'

export default class TecList extends Component{
  constructor(){
    super();
    this.state = {
      teachers:[],
      page:0,//当前页面
      count:5,//每页条数
      total:null,//总条数
      query:''//查询内容
    }

    this.renderTr = this.renderTr.bind(this)
  }
  componentDidMount(){
    this.getTecList(1)
  }
  getTecList(page){
    const {total,count} = this.state
    if(page < 1) return alert('已经是第一页了')
    //要避免数据为空的状态
    if(total!=null && page > Math.ceil(total/count)) return alert('已经是最后一页了')
    //获取分页讲师列表
    axios.get('http://bxg.huoqishi.net/teachers',
    {params:{
      page:page,
      count:count
    }}).then(({data:{teachers,total}})=>{
      //更改响应的值
      this.setState({teachers,total,page})
    })
  }

  handlerSearch(e){
    //在当前查到的列表数据中搜索
    //更改query的触发setState重绘从而触发renderTr
    this.setState({query:e.target.value})
  }

  renderTr(){
    const {teachers,query} = this.state

    //按查找条件处理数据列表
    let tempArr = teachers.filter(item=>item.username.indexOf(query) != -1)

    //渲染条件查找的分页讲师列表数据
   
    return tempArr.map((item,index)=>{
      return (<tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.username}</td>
        <td>{item.nickname}</td>
        <td>{this.getAge(item.birthDay)}</td>
        <td>{item.gender === 0 ? '男' : '女'}</td>
        <td>{item.phone}</td>
        <td>
          <a onClick={e=>this.showModal(item._id)} className="btn btn-info btn-xs">查 看</a>
          <Link to={{ pathname: `/home/tecedit/${item._id}` }} className="btn btn-info btn-xs">编 辑</Link>
          <a onClick={e=>this.handlerStatus(item)} href="javascript:;" className="btn btn-warning btn-xs">
            {item.status === 0 ? '启用' : '注销'}
          </a>
        </td>
      </tr>)
      })   
  }


  handlerSearchOnline(e){
    e.preventDefault()
    const {query} = this.state
    //发请求查找
    axios.get('http://bxg.huoqishi.net/teachers/search', {
      params: {
        query
      }
    }).then(({data:{teachers}})=>{
      this.setState({teachers})
    })
  }  

  handlerStatus(item){
    //控制状态
    const {status,_id} = item
    const newStatus = !status ? 1 : 0
    axios.post('http://bxg.huoqishi.net/teachers/handler', {
      _id,
      status: newStatus
    }).then(({data})=>{
      item.status = data.status
      this.setState({})
    })
  }


  showModal(id){
    //控制模态框
    // console.log(id)
    //refs上的myModal代表modal组件的实例
    this.refs.myModal.showModal(id)
  }

  getAge(date){
      return new Date().getFullYear() - new Date(date).getFullYear() + 1;
  }
  render(){
    const {query,page} = this.state;
    return (
      <div>
          <Modal ref='myModal'></Modal>
         <div className="body teacher-list">
     
                <ol className="breadcrumb">
                    <li><a href="javascript:;">讲师管理</a></li>
                    <li className="active">讲师列表</li>
                </ol>
                <div className="page-title">
                <Link to={{pathname: '/home/tecadd'}} className="btn btn-success btn-sm pull-right">添加讲师</Link>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form action="" className="form-inline">
                            <div className="input-group">
                                <input
                                value={query} 
                                onChange={e=>this.handlerSearch(e)}
                                type="text" className="form-control input-sm" />
                                <span className="input-group-btn">
                                    <button
                                    onClick={e=>this.handlerSearchOnline(e)}
                                    className="btn btn-success btn-sm">搜索</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>姓名</th>
                                <th>昵称</th>
                                <th>年龄</th>
                                <th>性别</th>
                                <th>手机号码</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody id="list">
                          {this.renderTr()}
                        </tbody>
                    </table>
                    <button onClick={e=>this.getTecList(page -1)} className="btn btn-primary">上一页</button>
                    <button onClick={e=>this.getTecList(page +1)} className="btn btn-primary">下一页</button>

                </div>
      </div>
      </div>
    )
  }
}