import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import logo from '../../assets/CarLogo.jpg';



const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-xl shadow-gray-400 px-5 py-2">
      
      <div className="flex items-center gap-3">
      <img src={logo} alt="Park India Logo" width="80" height="60"  />  
      <h2 className='text-2xl font-bold'>Park India</h2>
      </div>
      <div className="flex justify-between items-center gap-10 text-2xl font-bold  ">
        <Link to="/" className='hover:scale-110 transition-all'>Home</Link>
        <Link to="/bookslot" className='hover:scale-110 transition-all'>Book Slot</Link>
        <Link to="/plans" className='hover:scale-110 transition-all'>Plans</Link>
        <Link to="/contact" className='hover:scale-110 transition-all'>Contact us</Link>
        <Link to="/about" className='hover:scale-110 transition-all'>About</Link>

      </div>
      <div className="flex  justify-center items-center">
        
        <Link to="/login" className=' bg-[#6278d2] text-white hover:bg-[#3B5BDB] hover:scale-110 text-xl font-bold rounded-xl px-5 py-2 transition-all'>Login</Link>
      </div>

    </div>
  )
}

export default Header