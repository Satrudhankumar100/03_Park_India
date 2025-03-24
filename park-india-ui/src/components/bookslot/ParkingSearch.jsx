import React from 'react'
import './ParkingSearch.css';
const ParkingSearch = () => {
  return (
    <div className='parking-container mt-1'>
        <div className="search-bar">
            <input type="text" placeholder='e.g Bengaluru' />
            <button>Search now</button>
        </div>
        <h2 className='section-title font-bold p-5'>Most Searched Places</h2>

        <div className="parking-spots">
            <div className="spot-card">
                <h3>Parking Spot in Bihar</h3>
                <p>40+ premium Parking Spots Available Now!</p>

            </div>
            <div className="spot-card">
                <h3>Parking Spot in Bihar</h3>
                <p>40+ premium Parking Spots Available Now!</p>

            </div>
            <div className="spot-card">
                <h3>Parking Spot in Bihar</h3>
                <p>40+ premium Parking Spots Available Now!</p>

            </div>
        </div>
    </div>
  )
}

export default ParkingSearch