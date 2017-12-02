
import React from 'react'
import ReactDom from 'react-dom'


//引入bus插件处理组件间传值
import bus from './bus'


const BroA=()=>{
   const msg = 18
    return (
        <div>
            <button onClick={e=>{bus.$emit('mark',msg)}}>发给BroB</button>
            我是BroA
        </div>
    )
}
const BroB=()=>{
        bus.$on('mark',function(msg){
            alert(msg)
        })
        return (
            <div>
                我是BroB
            </div>
        )
    }

const App=()=>{
    return (
        <div>
            <BroA></BroA>
            <BroB></BroB>
        </div>
    )
}


ReactDom.render(<App />,document.querySelector('#box'))