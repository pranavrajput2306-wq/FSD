import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setcount]=useState(0);
    function inc(){
      setcount(count+1);
    }
    function dec(){
        setcount(count-1);
    }
  return (
    <div>
        <div style={{border:'2px,solid,red',height:'300px', width:'300px'}}>
        <h1>
       CounterApp</h1>
 <button onClick={inc}>Add +</button><br/>
 <span>{count}</span>
 <br/>
 <button onClick={dec}>Sub -</button>
 </div>
        </div>

  )
}

export default CounterApp
