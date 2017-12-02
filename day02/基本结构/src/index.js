//引包
//处理react元素
import React from 'react'
//将react元素渲染至页面
import ReactDom from 'react-dom'

import test from './test.css'

//定义react元素
//必须有个根元素
//类名写为className
const ele= <div className='test'>(｡･∀･)ﾉﾞ嗨</div>

//ReactDom的render方法可将元素渲染到页面指定位置
//第一个参数是react元素
//第二个参数是渲染的Dom的位置，必须是原生Dom
ReactDom.render(ele,document.querySelector('#box'))