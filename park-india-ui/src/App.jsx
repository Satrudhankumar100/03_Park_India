import { useState } from 'react'
import Home from './screens/Home'
import Login from './components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login/>
    </>
  )
}

export default App
