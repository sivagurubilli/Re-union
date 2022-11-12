import React from 'react'
import HouseCard from '../../components/HouseCard/HouseCard'
import Navbar from '../../components/Navbar/Navbar'

const Favourite = () => {
  var favdata1 = JSON.parse(localStorage.getItem("favdata"))
  return (
    <div>

      <Navbar/>
      <div style={{margin:"100px 300px"}} className='favdatacont'>

   <HouseCard el={favdata1} />

      </div>
    </div>
  )
}

export default Favourite