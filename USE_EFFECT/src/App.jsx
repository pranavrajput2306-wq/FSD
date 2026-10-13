import React, { useEffect, useState } from 'react'

const App = () => {
    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        password:""
    });
    useEffect(()=>{
        console.log("form data update",formdata)
    },[formdata])
  const Change=(e)=>{
  setformdata({
    ...formdata, [e.target.name]:e.target.value,
  })
  }



    const handleSubmit=(e)=>{
e.preventDefault();
alert("Submission successful!");
console.log(formdata);
    }

  return (
    <div>
      <form action="">
       Name:<input type="text" name='name' placeholder='enter your name' value={formdata.name} onChange={Change} />
        <br />
        Email:<input type="email" name='email' placeholder='enter youe mail id' value={formdata.email} onChange={Change} />
        <br />
        Password:<input type="password" name='password' placeholder='enter your password' value={formdata.password} onChange={Change} />
        <br />
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App
