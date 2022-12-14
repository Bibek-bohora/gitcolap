import React from 'react'
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

const App = () => {
  return (
    <div>
       <Router>     
       <Routes>
       <Route path='/' element={<Home/>} /> 
       <Route path='/about' element={<About/>} /> 
       </Routes>
       </Router>
    </div>
  )
}

export default App
