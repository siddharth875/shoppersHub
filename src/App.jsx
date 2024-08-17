import { useState, useEffect } from 'react'
import authService from './appwriteServices/authService'
import { useDispatch } from 'react-redux'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import {login, logout} from '../src/store/slices/authSlice'

function App() {
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getUser().then((user)=>{
      if (user) {
        dispatch(login())
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoader(false)
    })
  },[])

  return !loader ? (
    <>
    <Header/>
      <main>
      <Outlet/>
      </main>
    <Footer/>
    </>
): <div>Loading...</div>}

export default App
