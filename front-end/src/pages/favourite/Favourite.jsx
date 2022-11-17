import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import HouseCard from '../../components/HouseCard/HouseCard'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import "../Home/home.css"
const Favourite = () => {
  var favdata1 = JSON.parse(localStorage.getItem("favdata"))
const [favdata,setfavdata] = useState([])

  useEffect(()=>{
    axios.get("https://reunion-back.herokuapp.com/wishlist").then((res)=>{
  setfavdata(res.data)
    })
  },[])

console.log(favdata)




  return (
    <div>
      <Navbar/>
      <div style={{margin:"100px 300px"}} className='housedata'>
{favdata?.map((el)=>{
  return <HouseCard el={el} />
})}
   

      </div>
    </div>
  )
}

export default Favourite