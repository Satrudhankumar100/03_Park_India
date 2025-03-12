import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import logo from '../../assets/CarLogo.jpg';



const Header = () => {
  return (
    <div className="head">
      
      <div className="logo">
      <img src={logo} alt="Park India Logo" width="80" height="60"  />  
      <h2>Park India</h2>
      </div>
      <div className="nav-menu">
        <Link to="/home">Home</Link>
        <Link to="/slot">Available Slot</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About</Link>

      </div>
      <div className="login">
        
        <Link to="/login">Login</Link>
      </div>

    </div>
  )
}

export default Header