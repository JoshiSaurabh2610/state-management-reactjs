import React, { useContext } from 'react'
import Msg_context from '../../Context/Msg_context';
const Home = () => {
    const context = useContext(Msg_context);
    return (
        <div>
            <p style={{backgroundColor:'#eee',border:'2px solid black',padding:'3px',textAlign:'center'}}>
                this is Home page</p>
            <p>{context.msg}</p>
        </div>
    )
}

export default Home
