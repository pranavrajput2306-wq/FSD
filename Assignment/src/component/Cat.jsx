import React, { useState } from 'react'

const Cat = () => {
    const [w,setw]=useState(200);
    const [h,seth]=useState(200);
    function incw(){
       setw(w+10);
    }
    function decw(){
       setw(w-10);
    }
    function inch(){
      seth(h+10);
    }
    function dech(){
      seth(h-10);
    }
  return (
    <div>
        <div style={{border:'3px,solid,red', height:'400px', width:'400px'}}>
         <img src="https://t3.ftcdn.net/jpg/07/31/60/94/360_F_731609447_8IpYKdmJ4iwWiPpHCENvVyDlthA4i0fu.jpg" alt="Cat" height={h} width={w} /><br/>
         <button onClick={incw}>Row+</button><br/>
         <button onClick={decw}>Row-</button><br/>
         <button onClick={inch}>Col+</button><br/>
         <button onClick={dech}>Col-</button><br/>
        </div>
      
    </div>
  )
}

export default Cat
