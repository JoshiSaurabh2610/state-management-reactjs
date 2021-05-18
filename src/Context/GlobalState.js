import React from 'react'
import Msg_context from './Msg_context';
const GlobalState = (props)=>{
    return(
        <Msg_context.Provider value={{msg:'this is from GlobalState'}}>
        {props.children}
        </Msg_context.Provider>
    )
}
export default GlobalState;