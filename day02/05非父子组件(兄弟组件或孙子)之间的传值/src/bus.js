//用来处理非父子组件传值
const data = {}//存储处理数据的方法
const bus = {}//第三方实例


bus.$on = function(name,fn){
    //将处理数据的函数名及函数体以键值对的形式存入对象
    data[name]=fn
}
bus.$emit = function(name,arg){
    //利用name找到data中对应处理数据的方法
    //并将数据作为参数传入
    const fn = data[name]
    fn(arg)
}
export default bus