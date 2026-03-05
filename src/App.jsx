import { useState } from 'react'
import Home from './Components/Home/Home'
import { Routes , Route} from 'react-router-dom'
import PostJob from './Components/PostJob/PostJob'
import JobBoard from './Components/JobBoard/JobBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
    </>
  )
}

export default App
