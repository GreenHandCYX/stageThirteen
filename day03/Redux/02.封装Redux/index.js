//操作state

const oInp = document.querySelector('input');
const oAdd = document.querySelector('.add');
const oRemove = document.querySelector('.remove');

const store = require('./store')
const action = require('./actions')


oInp.value = store.getState();

oAdd.onclick = function(){

   store.dispatch(action.Add(1)) 
   oInp.value = store.getState()
}
oRemove.onclick = function(){
 
   store.dispatch(action.Remove()) 
   oInp.value = store.getState()
}
