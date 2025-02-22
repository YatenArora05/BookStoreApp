import React from 'react'
import Home from './Home/home'
import Course from './components/Course'
import { Route,Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
export default function App() {
  return (
   <>
     {/* <Home/>
     <Course/> */}
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/courses" element={<Courses/>}/>
       <Route path="/signup" element={<Signup/>}/>
         
     
     </Routes>
     
     </>
  )
}
