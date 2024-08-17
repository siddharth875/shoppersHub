import React from 'react'
import { useDispatch } from 'react-redux'
import {authLogout} from '../../store/slices/authSlice'
import authService from '../../appwriteServices/authService'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = function(){
        authService.logOut().then(()=>{
            dispatch(authLogout())
        })
    }
  return (
    <button onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn