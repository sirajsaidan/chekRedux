import {ADD_COUNT,DIC_COUNT} from '../action/type'
const intiState={count:0}
  
const CounterReducer=(state=intiState,action)=>{
    switch (action.type)
   { case ADD_COUNT:
        return {...state, count:state.count+1}
case DIC_COUNT:
    return {...state, count:state.count-1}
default :return state}
}
export default CounterReducer