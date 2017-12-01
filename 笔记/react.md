# es6的准备

箭头函数可以简单的解决this指向

class类





# es6 中的class

代替构造函数作为 构造函数

### es6与es5构造函数的不同

> 1.定义方式不同
>
> 2.定义实例属性方式不同
>
> 3.定义原型方法方式不同

es5

```js
function Hello(){
  this.say = say;
}
new Hello();
```



### 定义构造函数基本语法

```js
class Hello{
  
}
//只能new Hello不能调用Hello
```

#### 给实例添加属性

> es5给普通构造函数添加属性

```js
function User(age,name){
  this.age = age;
  this.name = name
}
var u =new User(998,'cyx')
```

> es6中class添加实例属性

```js
class User{
  //constructor就是类的构造函数
  constructor (age,name){
    this.age = age;
    this.name = name
  }
}
new User(998,'cyx')//new User调用的是constructor
```



#### 给class添加原型方法

> es5添加原型方法

```js
function User(age,name){
  this.age = age;
  this.name = name
}
User.prototype.hello = function(){console.log(this.name)}
```

> es6 class添加原型方法

```js
class User {
  //这里写在User内部的省去了function关键字的方法就是原型方法
  hello2(){
    
  }
  //多个方法不需要逗号隔开
  hello(){
    
  }
}
//也可以如es5一样通过prototype给构造函数加原型方法
User.prototype.hello = function(){console.log(this.name)}
```

#### 补充说明

```js
class User {
  
}

//等同于
class User{
  constructor(){
      //默认不写也有一个constructor
  }
}
```





## class实现继承的方式

```js
//人类
class Person(){
  constructor(){
    this.name = 'cyx'
    this.age = 18
  }
}
//中国人类，继承人类
//使用extends关键字来实现继承
class ChinaPerson extends Person{
}
//这个u其实是Person的实例,也是ChinaPerson的实例
const u = new ChinaPerson()
console.log(u.name)//cyx
```

> 等同于

```js
class Person(){
  constructor(){
    this.name = 'cyx'
    this.age = 18
  }
}
//中国人类，继承人类
//使用extends关键字来实现继承
class ChinaPerson extends Person{
  constructor(){
    //调用父类的Person的constructor,就会继承Person的实例
    //也就是将this指向父类的实例（不是原型继承）
    //注意:super 一定要在contructor的第一行来写
    super()//相当于拷贝了 Person()
    console.log(this)
  }
}
//这个u其实是Person的实例,也随ChinaPerson的实例
const u = new ChinaPerson()
console.log(u.name)//cyx
```

继承的目的:

//代码重用







# JSX语法(js+xml)

xml与html区别,xml标签必须闭合`<img />`



就是使用js的方式来写html

```jsx
//const str = '<h1></h1>'//以前的方式
const str = <h1 xx="18">我是小明</h1> //JSX请求写html,str称为react元素
//相当于
const obj = {
  type:'h1',
  props:{
    xx:'18',
    id:'99',
    children:'我是小明'
  }
}  
```





# 使用：

### 需先下载两个包

> `npm install react react-dom -S`
>
> react包用来处理react元素
>
> react-dom包用来将react元素添加到dom中

### 1.定义一个react元素,注意react元素必须有一个根元素

```jsx
import React from 'react'
//这个不用引号包裹的标签，称之为react元素
//这个react元素最终会被渲染到dom,形成一个div元素
const ele = <div id='998'></div>
```

### 2.将react元素渲染到dom中

> 通过ReactDom的render方法将指定react元素渲染到dom中
>
> 参数1:要渲染的react的元素
>
> 参数2:指定参数一要渲染到什么位置(必须是通过原生js获取的原生dom对象)

```jsx
import React from 'react'
import ReactDom from 'reactDom'
const ele = <div id='17' age="18">我是小明</div>
      
//参数2必须是原生dom元素
ReactDom.render(ele,document.querySelector('#box'))
```



### 3.借助webpack babel让上述代码能在浏览器中运行

babel-loader也可以将jsx语法转为常规的es5(转为一个js对象)

webpack.config.js

```js
 // loaders
    // rules
    // 配置让其他的第三方包来处理非js后缀的文件
    //将jsx语法解析为es5
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/, // 忽略,不处理 node_modules中的js文件
      }
```

.babelrc

```js
{
    //配置babel
    //presets用来指定进行语法转化的包
    //env对应的包是babel-preset-env,作用是将es678转为es5
    //react对应的包是babel-preset-react 作用是将jsx语法转为js语法
    "presets": [
        "env",
        "react"
    ]
}
```







#### 注意:

​	1.react元素中的标签要闭合

​	2.属性要写为驼峰的写法,如`autofocus`要写为`autoFocus`

​	3.class与for属性需要写为`className`和`htmlFor`,避免关键字

```jsx
const element = <div className='test'></div>
const element = {
  type:'div',
  props:{
    className:'test'
  }
}


const element = <label htmlFor='test'></label>
const element = {
  type:'label',
  props:{
    htmlFor:'test'
  }
}

```







### 4.在react元素中混写js代码

```jsx
const name = '我是cyx'
const ele = <h1>{ name }</h1>
const element = {
  type:'h1',
  props:{
    children:name
  }
}
```

```jsx
const name = '我是cyx'
const ele = <h1>{ 'hello,'+name }</h1>
```







### 5.事件注册

```jsx
const ele = <button onClick={ function(){alert(18)} }>呵呵</button>
const ele ={
  type:'button',
  props:{
    onClick:function(){
      alert(18);
    }
  }
}        
ReactDom.render(ele,document.querySelector('#box'))


function handler(){
  alert(123)
}
const ele2 = <button onClick={ handler }>呵呵</button>
ReactDom.render(ele2,document.querySelector('#box'))



//传参时,不能直接加括号
const ele3 = <button onClick={ ()=>{handler(msg)} }>呵呵</button>
      
      
      
//渲染多个
  const eleAll = <div>{ele}{ele1}</div> 
```



react元素第一个标签不要换行，如果非要换行就在标签外包一个()

```jsx
const element = (
  <div>
  </div>	
)
```



### 6.jsx语法对表单控制进行操作(input)

//无双向数据绑定

1.如何给input赋值

2.如何得到input中的value值

注意:

- 使用value属性给input赋值，默认是只读的，输入框不能再输入内容了

- 通常让只读变为可以编辑的方式:1)通过onChange得到最新的值，把这个值重新保存到某个变量中

  ​							2)调用重新渲染DOM的方法，在渲染时把这个新的变量赋给表单的value

```jsx
 //若要修改则必须: a.通过onChange事件获取实时表单的值放到一个变量中
                   //b.通过setState更新模板中即react元素中相应的值
```



react的onChange事件同原生的js的onchange不同它会在数值改变时就触发

注:在react元素中调用js函数,表达式，包括注释必须放在{}中

​	而且为了事件的this指向组件实例通常在{}中书写箭头函数







### 7.jsx渲染数据列表

```jsx
const data = [
  {id:1,name:'小明',salary:'20k'},
  {id:2,name:'小红',salary:'20k'},
  {id:3,name:'小工',salary:'15k'}
]

const arr = [<li>小明</li>,<li>小红</li>,<li>小工</li>]
//react内部会将数组arr中的元素展开渲染,要求有一个key用来作性能优化
const xx = <ul>{arr}</ul>
```

注释和其他js代码都要包在{}里面











### 8.控制元素样式(style,className)

```jsx
const ele = <div className="hide"></div>

      //如果用style控制样式应该是一个对象
      
const ele = <div style={ {color:'red',backgroundColor:'grenn'} }>我是</div>
```









# react组件(要求构造函数首字母大写)

> 可以认为是对react元素的封装

### a.普通函数组件

> 函数必须返回一个react元素

```jsx
//这个返回了react元素的Btn方法就是react组件
function Btn(props){
  const ele = <div>我是{props.name}</div>
  return ele
}
ReactDom.render(Btn({name:'小明',age:18,sex:'男'}),dom对象)
//如果写成标签形式默认会将标签上的属性组成一个对象
//并把这个对象作为Btn方法的参数传递
ReactDom.render(<Btn name={'小明'} age={ 28 } sex='男' />,dom对象)//推荐写法，就是调用Btn方法的意思
```

注意:

> 组件方法名要大写
>
> 给方法传递的参数应该写在标签的属性上

### b.构造函数形式的组件

> 1.这个构造函数必须有一个原型的render方法或者实例上的render方法
>
> 2.这个render方法必须返回一个react元素
>
> 3.这个构造函数要继承自React.Component//继承的目的是为了使用Component的方法或者数据

```jsx
import React from 'react'


function Btn(){
  this.render = function(){
    const ele = <h1>我是btn构造函数形式的组件</h1>
     return ele
  }
}
//这个Btn就是构造函数形式的组件
Btn.prototype = new React.Component()
const btn = new Btn()
ReactDom.render(new Btn().render(),dom对象)
ReactDom.render(<Btn />,dom对象)//推荐写法

//当我们写<Btn />是会判断如果Btn是普通函数，则直接调用
//如果继承自React.Component会先new Btn()再调用实例的render方法

```







### 带参数的构造函数组件

> 无论是普通函数组件还是构造函数组件都可以在标签上添加属性
>
> 添加的属性都会在props对象中

```jsx
//普通函数组件
function Btn(props){
    // props //  {id: 20, name: '小明', children: 'ddd'}
  const ele = (<div>我是普通函数组件</div>)
        return ele
}
//如果写在 标签形式，默认会将 标签上的属性组成一个对象,
ReactDom.render(<Btn name='小明' age={20}/>)
ReactDOM.render(Btn({name: '小明', age: 18, sex:'屁'}), document.querySelector('#box'))

//构造函数

function Btn () {
  this.render = function () {
    // this.props // {id: 10, name: '小明', children: 'ddd'}
    return <div></div>
  }
}
Btn.prototype = new React.Component()
//双标签内部的内容会加在props的children上
<Btn id={10} name='小明'>ddd</Btn>
```







# 加法计算器:



this.setState({})方法会重新渲染当前组件,内部重新调用render方法，将render方法的返回值渲染到页面上去

//是从React.Component中继承过来的

```jsx
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
```



