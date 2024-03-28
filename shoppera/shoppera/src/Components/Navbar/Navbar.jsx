import React from 'react'
import './Navbar.css'

import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='nav-logo'>
            <img src={logo} id='lg'></img>
        <p>SHOPPERA</p>
        <ul className ="nav-menu">
            <li>Menu <hr></hr> </li>
            <li>Mujer</li>
            <li>Hombre</li>
            <li>Chicos</li>
            <li>Mascota</li>
            <li>Elctronica</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button> 
        </div>
        </div>
    </div>
  )
}

export default Navbar