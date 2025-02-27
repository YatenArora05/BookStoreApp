import React from 'react'
import Home from './Home/home'
import Course from './components/Course'
import { Navigate, Route,Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import  { Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider';
export default function App() {
  
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
   <>
     {/* <Home/>
     <Course/> */}
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/courses" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
       <Route path="/signup" element={<Signup/>}/>
     </Routes>
     <Toaster/>
     
     </>
  )
}
