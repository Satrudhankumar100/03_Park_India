import React from 'react';
import './Signup.css';
const Signup = () => {
  return (
    <div className='flex justify-center m-4'>
      <div className="bg-white p-10 rounded-2xl w-[400px] md:w-2/5 shadow-2xl ">
        <h2 className='text-2xl font-bold'>Create Account</h2>
        
        <form className='flex flex-col'>
          <label htmlFor="full-name">Full Name</label>
          <input className="input"  type="text" id="full-name" placeholder="Full Name" />

          <label htmlFor="email">Email</label>
          <input className="input" type="email" id="email" placeholder="Email" />

          <label htmlFor="contact">Contact No.</label>
          <input className="input" type="tel" id="contact" placeholder="Contact No." />

          <label htmlFor="address">Address</label>
          <input className="input" type="text" id="address" placeholder="Enter your address" />

          <button type="submit" className="submit-btn">
            Submit <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>


  );
};

export default Signup;
