import React from 'react'
import logo from '../assets/CarLogo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='w-full bg-black text-white pt-10 pb-2 flex flex-col gap-5'>
                <div className='flex'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-10 w-full justify-items-center '>
                        <div className='flex flex-col items-center justify-center '>

                            <img src={logo} alt="Park India Logo" width="80" height="60" />
                            <h2 className='text-2xl font-bold text-white'>Park India</h2>

                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='text-white text-xl font-bold underline mb-2'>Top Searched Places</div>
                            <div className='text-sm flex flex-col justify-center '>
                                <div>Parking Spot in JP-Nagar</div>
                                <div>Parking Spot in BTN</div>
                                <div>Parking Spot in Hyderabad</div>
                                <div>Parking Spot in Patna</div>
                                <div>Parking Spot in Delhi</div>

                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='text-white text-xl font-bold underline mb-2'>Quick Search</div>
                            <div className='text-sm flex flex-col justify-center '>
                                <Link to="/home" className='hover:scale-110 transition-all'>Home</Link>
                                <Link to="/slot" className='hover:scale-110 transition-all'>Available Slot</Link>
                                <Link to="/plans" className='hover:scale-110 transition-all'>Plans</Link>
                                <Link to="/contact" className='hover:scale-110 transition-all'>Contact us</Link>
                                <Link to="/about" className='hover:scale-110 transition-all'>About</Link>
                            </div>

                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='text-white text-xl font-bold underline mb-2'>Social Media </div>
                            <div className='text-sm flex flex-col justify-center '>
                                <Link to="/home" className='hover:scale-110 transition-all'>Facebook</Link>
                                <Link to="/slot" className='hover:scale-110 transition-all'>Whatsapp</Link>
                                <Link to="/plans" className='hover:scale-110 transition-all'>Linkdin</Link>
                                
                            </div>

                        </div>

                    </div>

                </div>
                <hr />
                <div className='flex justify-center items-center'>
                    &copy; Copyright 2025 Park India
                </div>

            </div>
        </>
    )
}

export default Footer