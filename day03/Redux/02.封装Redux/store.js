//初始化仓库

const {createStore}=require('redux')

//引入reducer
const reducer = require('./reducer')

const store = createStore(reducer)


module.exports = store