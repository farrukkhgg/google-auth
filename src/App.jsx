import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './server/firebase'


const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if(user){
        navigate('/home')
      } else{
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [navigate])

  return (
      <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='*' element={<Login/>}/>
     </Routes>
  )
}

export default App