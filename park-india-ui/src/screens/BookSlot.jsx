import React from 'react'
import CustomerReview from '../components/bookslot/CustomerReview'
import ParkingSearch from '../components/bookslot/ParkingSearch'
import RequestSlot from '../components/bookslot/RequestSlot'

const BookSlot = () => {
  return (
    <>

    <ParkingSearch/>

    <RequestSlot/>
    <CustomerReview />
    </>
  )
}

export default BookSlot