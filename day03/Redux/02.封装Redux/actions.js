//设置action对象


//设置操作类型
const ActionType = {
    ADD:'add',
    REMOVE:'remove'
}

function Add(newVal){
    return {
        type:ActionType.ADD,
        newV:newVal
    }
}

function Remove(){
    return {
        type:ActionType.REMOVE
    }
}


module.exports = {
    ActionType,
    Add,
    Remove
}