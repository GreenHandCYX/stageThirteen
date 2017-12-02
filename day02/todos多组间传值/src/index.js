
import React from 'react'

import ReactDom from 'react-dom'

import test from './index.css'

//引入子组件并为子组件传值
import List from './list'

import Add from './add'

//利用className创建构造函数组件
//1.render原型方法 2.render方法返回react元素 3.继承React.Component
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: [
            {id:1, name: '吃饭', isSelected: false},
            {id:2, name: '睡觉', isSelected: true},
            {id:3, name: '打豆豆', isSelected: false},
            ]
          }
    }
    render(){
        const {todos} = this.state;
        return (
            <div>
                <section className="todoapp">
                    <Add addTodo={(...arg)=>this.addTodoHandler(...arg)}></Add>
                    <section className="main">
                        <input id="toggle-all" className="toggle-all" type="checkbox" />
                        <label htmlFor="toggle-all">Mark all as complete</label>
                        <ul className="todo-list">
                            
                          <List todos={ todos } delTodo={(delItem)=>this.delTodo(delItem)}></List>
                        </ul>
                    </section>
                
                    <footer className="footer">
                    
                        <span className="todo-count"><strong>0</strong> 未完成</span>
                    
                        <button className="clear-completed">清除全部</button>
                    </footer>
                </section>
            </div>
        )
    }

    //定义添加任务的方法以传至子组件
    addTodoHandler(arg){
        this.state.todos.push({
            id:Math.random(),
            name:arg,
            isSelected:false
        })


        //添加数据后需要重新渲染
        this.setState({})
    }


    //删除指定任务
    delTodo(delItem){
        //过滤掉与传递的相同的后即达到了删除
        this.state.todos= this.state.todos.filter(item=>delItem.id!==item.id)
        this.setState({})
    }
}

ReactDom.render(<App />,document.querySelector('#box'))