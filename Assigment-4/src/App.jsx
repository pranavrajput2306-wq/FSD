// import React from 'react'
// import Book from './Components/book'

// const App = () => {
//   return (
//     <div style={{display:'flex', gap:'10px'}}>
//       <Book name="book1" pri="300" img="src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWA5E5mlmy_8OA1JuCEUoUDYoMCUZkpophsC5ZFEQHJw&s"/>
//       <br/>
//       <Book name="book2" pri="600" img="src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpfNn5gQ7RHz4GJrdV0j3G7_yaeddH5rN2jdZsJrC0ESU6hKi4Ol8z8pU&s=10"/>
//       <br/>
//     </div>
//   )
// }

// export default App
  
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function Home(){
 return <h1>This is my home page</h1>
}
function About(){
return <h1>This is my about page</h1>
}
function Contact(){
return <h1>This is my contact number</h1>
}
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">HOME PAGE</Link> |{" "}
        <Link to="/about">ABOUT PAGE</Link>|{" "}
        <Link to="/contact">CONTACT US</Link>
      </nav>
      <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
