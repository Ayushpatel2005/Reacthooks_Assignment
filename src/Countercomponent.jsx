import React, { useState } from 'react'

const Countercomponent = (props) => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h3 className='counterTxt'>Counter - {count}</h3>
            <button style={{background:"green"}} className='incrementBtn' onClick={()=>setCount(count + 1)}> value Increment </button>&nbsp;
            <button style={{background:"red"}} className='decrementBtn' onClick={()=>setCount(count - 1)}> value Decrement </button>
            {props.children}
        </div>
    )
}
export default Countercomponent  