//添加任务的组件
import React from 'react'
export default class extends React.Component {
    constructor(){
        super()
        this.state = {
            newTodo:'test'
        }
    }
    render (){
        return (
            <header className="header">
                <h1>todos</h1>
                <form action="" onSubmit={e=>{this.sub(e)}}>
                    <input ref='inp' className="new-todo" onChange={e=>this.setState({newTodo:e.target.value})} autoFocus value={this.state.newTodo}/>
                    {//此处因为实时修改的是add本身的值所以在该组件内setState
                    }
                </form>
            </header>
        )
    }
    sub(e){
        //阻止默认事件
        e.preventDefault()
        this.props.addTodo(this.state.newTodo)
        this.setState({newTodo:''})
    }

    //给父组件传值:
    //1.父组件中定义了修改父组件数据的方法
    //2.将这个方法通过子组件的属性传过来，子组件调用后执行，也就可以给父组件传值了

    //此处onChange仅用来监听数值变化
    //submit触发才会向父组件传值
}