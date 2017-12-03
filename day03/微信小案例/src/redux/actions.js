const ActionType ={
    DEL:'del',
    EDIT:'edit'
}
function Del(id){
    return {
        type:ActionType.DEL,
        id:id
    }
}

export default {
    Del:Del,
    ActionType:ActionType
}
