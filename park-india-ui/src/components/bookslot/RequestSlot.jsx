import React from 'react';

const RequestSlot = () => {
    return (
        <div className='w-full max-w-lg mx-auto p-6 rounded-2xl shadow-xl'>
            <h2 className='text-xl font-bold text-center mb-4'>Request a Slot</h2>
            <form className='space-y-4'>
                <input className='w-full p-2 border rounded' type='text' placeholder="वाहनस्वामी का नाम/ Owner's Name" />
                <input className='w-full p-2 border rounded' type='email' placeholder='Email'/>
                <input className='w-full p-2 border rounded' type='text' placeholder='Contact' />
               <div className='flex justify-around gap-2'>
                 
               <select className='w-full p-2 border rounded'>
                    <option value=''>Select Duration</option>
                    <option value='1'>1 month</option>
                    <option value='2'>2 months</option>
                    <option value='2'>6 month more</option>
                </select>
                
                <select className='w-full p-2 border rounded'>
                    <option value=''>वाहन श्रेणी/ Vehicle Class</option>
                    <option value='4w'>4 Wheeler</option>
                    <option value='2w'>2 Wheeler</option>
                    <option value='6w'>6 Wheeler</option>
                </select>

                
                
               </div>
               <input className='w-full p-2 border rounded' type="text" placeholder='वाहन संख्या/Vehicle no' />
                
                <div className='flex items-center'>
                    <input type='checkbox' id='agree' className='mr-2' />
                    <label htmlFor='agree'>I agree to the terms and conditions</label>
                </div>
                
                <input className='w-full p-2 border rounded hidden' type="text" placeholder='enter otp' />
                <button className='w-full bg-[#6278d2] text-white p-2 rounded hover:bg-blue-600'>Submit</button>
            </form>
        </div>
    );
};

export default RequestSlot;