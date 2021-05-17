import React,{useReducer, useState} from 'react';
const reducer=(state,action)=>{
    switch(action.type){
        case 'INC':
            return state+1;
        case 'DEC':
            return state-1;
        case 'INIT':
            return +action.payload;
        default:
            return state;
    }
}
const Counter = () => {
    const [initCount, setInitCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <label> Initial Count
                <input placeholder={0} onChange={(event)=>event.target.value?setInitCount(event.target.value):setInitCount(0)}/>
            </label>
            <br/>
            <button onClick={()=>dispatch({type:'INIT',payload:initCount})}>Set Counter</button>
            <p>Counter: {state}</p>
            <button onClick={()=>dispatch({type:'INC'})}>Increase</button>
            <button onClick={()=>dispatch({type:'DEC'})}>Decrease</button>
        </div>
    )
}

export default Counter
