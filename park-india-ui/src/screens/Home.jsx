import React from 'react'
import Header from '../components/Header/Header'
import CustomCard from '../components/Card/CustomCard'
import Footer from '../components/Footer'

const Home = () => {


  return (
    <>
      <Header />
      <div className='min-h-screen'>

        <CustomCard />
      </div>
      <Footer />
    </>

  )
}

export default Home