import React from 'react'

import CustomCard from '../components/Card/CustomCard'

import landmark from '../utils/Landmark'
import topBannerImg from '../assets/parkingBanner.jpg'

const Home = () => {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <>
     
      <div className='min-h-screen p-4'>
        <div className=''>
          <img src={topBannerImg} alt="Top Banner" width={'50%'} height={'10%'} />

        </div>
        <h1 className='text-center text-3xl font-bold mb-6'>India States</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {landmark.map((state, index) => (
              <CustomCard key={index} landmark={state} />
            ))}
          </div>
        

      </div>
     
    </>

  )
}

export default Home