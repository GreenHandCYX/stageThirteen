import act from './actions'
function reducer(state,action){
    if(state===undefined){
        state = {
              // 聊天记录
        chatList: [
            {id: 1, msg: '中午吃饭了吗', time: '7:18'},
            {id: 2, msg: '晚上饭了吗', time: '8:18'},
            {id: 3, msg: '明天吃饭了吗', time: '9:18'},
            {id: 4, msg: '凌晨吃饭了吗', time: '10:18'}
            ]
        }
    }
    switch(action.type){
        case act.ActionType.DEL:
        //删除
        state.chatList = state.chatList.filter(item=>item.id!==action.id)
        break;
    }
    return state;
}

export default reducer
