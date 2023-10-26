import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Home from './pages/Home'


export default function App() {
  return <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/About' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  
}

