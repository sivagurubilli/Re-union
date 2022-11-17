import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Allroutes from './pages/AllRoutes/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Allroutes/>
        
    </div>
  )
}

export default App
