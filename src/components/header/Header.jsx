import React from 'react'
import {LogoutBtn, Logo, Container} from '../index'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state)=> state.auth.status)
  const navItem = [
    {
      name : "Home",
      slug : "/",
      active : true
    },
    {
      name : "Product Catalogue",
      slug : "/",
      active : true
    },
  ]
  return (
    <div>
      <Container>
      <div id='logo'>
        <Link to={"/"}>
        <Logo/>
        <h1>Company Name</h1>
        </Link>
      </div>
      <div>
        <ul>
        {navItem.map((item)=>(
            item.active ? (
              <li key={item.slug}>
                <button onClick={()=> navigate(item.slug)}>
                {item.name}
                </button>
              </li>
            ) : null
          ))}
          {isLoggedIn && (
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
      </div>
      </Container>
    </div>
  )
}

export default Header