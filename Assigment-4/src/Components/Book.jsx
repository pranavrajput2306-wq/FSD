import React from 'react'

const Book = (props) => {
  return (
    <div>
        <div style={{border:'3px, solid black',height:'200px',width:'200px',backgroundColor:'aqua'}}>
            <h1>MY BOOK</h1>
           <p> <img  src={props.img}alt="#" height={'50px'} /></p>
            <h2>NAME:{props.name}</h2>
            <h2>PRICE:{props.pri}</h2>
        </div>
       
      
    </div>
  )
}

export default Book

