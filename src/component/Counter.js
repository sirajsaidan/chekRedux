import React from "react";
import {useSelector, useDispatch}from 'react-redux'
import {CountMoins,CountPlus} from '../action/action'
const Counter = () =>{
const Count = useSelector(state => state.CounterReducer)
const dispatch = useDispatch()
return (
     <div className="counter">
       <h2>Counter</h2>
       <div>
         <button onClick={() => dispatch(CountMoins())}>-</button>
         <span className="count">{Count.count}</span> 
         
         <button onClick={() =>dispatch(CountPlus())}>+</button>
       </div>
     </div>
   );
 }

export default Counter;