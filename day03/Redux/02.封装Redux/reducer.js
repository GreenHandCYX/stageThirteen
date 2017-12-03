//用来初始化state和操作state

//获取操作类型
const {ActionType} = require('./actions') 

function reducer(state,action){
    if(state===undefined){
        state = 0
    }
    switch(action.type){
        case ActionType.ADD:
        state += action.newV
        break;
        case ActionType.REMOVE:
        state --;

    }
    return state;
}
module.exports = reducer