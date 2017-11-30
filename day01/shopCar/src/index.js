//1.使用react的三步
//引包
//定义react元素
//将react元素渲染至页面
import React from 'react'
import ReactDom from 'react-dom'


import './assets/css/iconfont.css'
import HeaderStyle from './assets/css/header.css'
import './assets/css/list.css'
//使用构造函数组件
    //1.建立有render方法的构造函数,首字母要大写
    //2.render方法必须返回一个react元素
    //3.继承React.Component的组件的方法及属性

//修改表单值: a.通过onChange事件获取实时表单的值放到一个变量中
                   //b.通过setState更新模板中即react元素中相应的值

function ShopCar(){
     // 数据写在这个state中有好处，回头再说
     this.state = {
        username: '小明明',
        list: [
          {
            id: 1,
            img: './assets/img/avatar.jpg',
            name: '家d蕊 (JIARUI) 厨房置物',
            des: '重量 1.1kb 颜色: 银白色', 
            price: 998, 
            count: 1},
          {id: 2,
            checked: true, // 选中
           img: './assets/img/goods-02.jpg',name: '998家d蕊 (JIARUI) 厨房置物', des: '重量 1.1kb 颜色: 银白色', price: 18, count: 3},
          {id: 3, img: './assets/img/goods-01.jpg',name: '997家d蕊 (JIARUI) 厨房置物', des: '重量 1.1kb 颜色: 银白色', price: 17, count: 1},
        ]
      }
    
      
    this.countClick =function(item,type){
        item.count += type
        if(item.count < 1) return alert('不能再减了');
        this.setState({})
    }
    this.toggleAll = function(e){
        //全选    
       this.state.list.forEach(item=>item.checked=e.target.checked)
       this.setState({})
    }
    this.render = function(){
        const {list} = this.state
        return (
            <div>
                <div className="header">
                    <i className="iconfont icon-shouye"></i>
                    <h3>购物车</h3>
                    <i className="iconfont icon-edit"></i>
                </div>
                <div className="toggle-all">
                    <input
                    onChange={e=>{this.toggleAll(e)}}
                    id="all" type="checkbox"/> <label htmlFor="all">黑马自营</label>
                </div>
                <ul className="list">
                    {
                        //遍历数据列表,返回每一条数据，jsx会将这些数据进行遍历到页面,要求有一个key用来作性能优化
                        list.map(item=>{
                            return (   
                                <li key={item.id} className="list-item">
                                    <div className="list-item-toggle">
                                        <input onChange={e=>{item.checked=!item.checked; this.setState({})}}
                                           checked={item.checked} type="checkbox"/></div>
                                        <div className="list-item-cover"><img src={item.img}  alt=""/></div>
                                        <div className="list-item-info">
                                            <p className="list-item-title">{item.name}</p>
                                            <p className="list-item-des">{item.des}</p>
                                            <div className="list-item-footer">     
                                            <span className="price">{item.price}￥.00</span>
                                            <div className="list-item-edit">
                                                <button onClick={e=>{this.countClick(item,-1)}} >-</button>
                                                <input value={item.count}
                                                type="text" />
                                                <button onClick={e=>{this.countClick(item,1)}}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
ShopCar.prototype = new React.Component();


ReactDom.render(<ShopCar />,document.querySelector('#box'))