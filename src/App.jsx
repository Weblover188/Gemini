import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate ('/');
      }
      else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  },[])

  return (
    <>
      <ToastContainer theme='dark'/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />

      </Routes>
    </>
  )
}

export default App
