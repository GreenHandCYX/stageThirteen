//1.使用react的三步
//引包
//定义react元素
//将react元素渲染至页面
import React from 'react'

import ReactDom from 'react-dom'



    

    //在react中表单默认的值默认只读
    //若要修改则必须: a.通过onChange事件获取实时表单的值放到一个变量中
                   //b.通过setState更新模板中即react元素中相应的值
    //注:这个onChange不同于js的原生onchange，他会在值一改变时即触发
        //在react元素中调用js函数,表达式，包括注释必须放在{}中
        //而且为了事件的this指向组件实例通常在{}中书写箭头函数

//使用构造函数组件
    //1.建立有render方法的构造函数,首字母要大写
    function Calc(){
        this.numA = 0;
        this.numB = 0;
        this.total = 0;
        this.render = function(){
            //2.render方法必须返回一个react元素
            //换行应加()
            return (
                <div>
                    <input onChange={
                        (e)=>{
                           //为了事件的this指向组件实例通常在{}中书写箭头函数
                            this.valueChangeA(e)
                        }
                        } type="text"/>
                    <span>+</span>
                    <input onChange={
                        (e)=>{
                             //为了事件的this指向组件实例通常在{}中书写箭头函数
                            this.valueChangeB(e)
                        }
                        }
                    type="text"/>
                    <button onClick={ e=>{
                        this.total = this.numA-0 + (this.numB-0)
                        this.setState({})
                    }}>=</button>
                    <h1>{ this.total }</h1>
                </div>
            )
        }
        this.valueChangeA =function(e){
            this.numA=e.target.value
            //更新
            this.setState({})
        }
        this.valueChangeB =function(e){
            this.numB=e.target.value
            //更新
            this.setState({})
        }
        
        
    }
    //3.继承React.Component的组件的方法及属性
        Calc.prototype = new React.Component();
    //使用方式 a.  new Calc().render();若有参数则相当于绑给Calc的实例后再调用render方法
            //b.   标签传值或有内容时都作为实例的props属性传递,推荐
    ReactDom.render(<Calc />,document.querySelector('#box'))