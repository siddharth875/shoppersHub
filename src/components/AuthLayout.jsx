import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children, authenticated}) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const auth = useSelector((state)=> state.auth.status)
    useEffect(()=>{
        if(authenticated && auth !== authenticated){
            navigate("/signin")
        }
        else if(!authenticated && auth !== authenticated){
            navigate("/")
        }
        setLoading(false )
    },[auth, authenticated, navigate])
  return (
    <div>
        {loading ? <h1>Loading...</h1> : {children}}
    </div>
  )
}

export default AuthLayout