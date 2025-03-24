import { useState } from 'react'
import Home from './screens/Home'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Signup from './components/SignUp/Signup'
import { Route, Routes } from 'react-router-dom'
import CustomerReview from './components/bookslot/CustomerReview'
import ParkingSearch from './components/bookslot/ParkingSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
     
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/bookslot" element={<ParkingSearch/>}/>
             
              
            
            </Routes>


        
      <Footer />
    </>
  )
}

export default App
