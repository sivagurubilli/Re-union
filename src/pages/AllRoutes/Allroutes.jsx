
import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Favourite from '../favourite/Favourite'
import Home from '../Home/Home'
import Loginuser from '../login/Login'
import Signup from '../Signup/Signup'

const Allroutes = () => {
  return (
    <div>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/signup" element={<Signup/>}/>
          <Route path ="/login" element={<Loginuser />}/>
          <Route path ="/favourite" element={<Favourite/>}/>
          
          </Routes>
    </div>
  )
}

export default Allroutes