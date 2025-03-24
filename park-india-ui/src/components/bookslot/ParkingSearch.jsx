import React from 'react'
//import './ParkingSearch.css';
const ParkingSearch = () => {
  return (
    <div className=' flex flex-col items-center justify-center p-4  w-full '>
        {/* ############## Search Bar #################### */}
        <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-xl w-1/2 items-center ">
            <input className="flex flex-1/2 pl-6 outline-none" type="text" placeholder='e.g Bengaluru' />
            <button className="bg-[#6278d2] px-8 py-2 rounded-2xl text-lg font-bold text-white cursor-pointer">Search now</button>
        </div>
        
{/* ################ cards #####################3 */}




        <h2 className='font-bold p-5'>Most Searched Places</h2>

        <div className="flex justify-center flex-wrap gap-10">
            <div className="flex justify-center flex-col p-8 w-96 bg-white shadow-2xl shadow-gray-400 transition-all hover:bg-[#6278d2] hover:scale-105 rounded-2xl hover:text-white ">
                <h3 className='font-bold'>Parking Spot in Bihar</h3>
                <p>40+ premium Parking Spots Available Now!</p>

            </div>
            <div className="flex justify-center flex-col p-8 w-96 bg-white shadow-2xl shadow-gray-400 transition-all  hover:bg-[#6278d2] hover:scale-105 rounded-2xl hover:text-white ">
                <h3 className='font-bold'>Parking Spot in Bihar</h3>
                <p>40+ premium Parking Spots Available Now!</p>

            </div>
            <div className="flex justify-center flex-col p-8 w-96 bg-white shadow-2xl shadow-gray-400 transition-all hover:bg-[#6278d2] hover:scale-105 rounded-2xl hover:text-white ">
                <h3 className='font-bold'>Parking Spot in Bihar</h3>
                <p>40+ premium Parking Spots Available Now!</p>

            </div>
        </div>
    </div>
  )
}

export default ParkingSearch