//列表组件
import React from 'react'

export default class List extends React.Component {
    constructor (){
        super()
        //用于控制双击谁给谁添加编辑类
        this.state={
            nowEdit:null
        }
    }
    render(){
        //通过props接收父组件传递的数据
        return (
            //得到列表数组
            this.props.todos.map(item=>{
                //返回react元素组成的数组
                return (
                    <li className={(item.isSelected?"completed":'') + (this.state.nowEdit==item.id?' editing':'')} key={item.id} >
                        <div className="view">
                            <input className="toggle" onChange={e=>{this.checkHandler(item)}} type="checkbox" checked={item.isSelected} />
                            <label onDoubleClick={e=>this.DoubleHandler(item)}>{item.name}</label>
                            <button className="destroy" onClick={e=>this.delHandler(item)}></button>
                        </div>
                        <input className="edit" onChange={e=>this.editHandler(item)} value="Create a TodoMVC template" />
                        
                    </li>
                )
            })    
        )
    }
    checkHandler(item){
        //更改当前点击元素的isSelected,以控制元素的完成状态
        item.isSelected = !item.isSelected
        this.setState({})
    }


   
    DoubleHandler(item){
        //双击谁全局的nowEdit就应该等于谁的id,也就达到了编辑当前的目的
        this.setState({nowEdit:item.id})
        

    }
     //向父组件传值以修改对应点击的值
     editHandler(item){
         //向父组件传值以修改对应点击的值
     }


     //删除指定任务，需要向父组件传值
     delHandler(item){
        this.props.delTodo(item)
     }
}