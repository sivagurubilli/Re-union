import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./home.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { getdata } from '../../redux/DataReducer/action'
// import { getfilterdata } from '../../redux/DataReducer/action'
import {useDispatch,useSelector} from "react-redux"
import HouseCard from "../../components/HouseCard/HouseCard"
import axios from "axios"

const Home = () => {


    const [data,setdata] = useState([])
    const [data1,setdata1] = useState([])
    const [city,setcity] = useState()
    const [price,setprice] = useState()
    const [housetype,sethousetype] = useState()
     const [payload,setpayload]= useState()
        const dispatch= useDispatch()
       var  datad= useSelector((store)=>store.datareducer.hoteldata)
       var filterddata = useSelector((store)=>store.datareducer.filterddata)
    
       // get the data when component mount
    useEffect(()=>{
       
    dispatch(getdata())
 setdata(datad)
    },[getdata,dispatch,setdata])
  

 const filterbycity=(e)=>{
const {id,value} = e.target
setcity(value)
 }

 const filterbyprice=(e)=>{
  const {id,value} = e.target
  setprice(value)
  
}
const filterbyhousetype=(e)=>{
  const {id,value} = e.target
  sethousetype(value)
}

const filterProperty=()=>{
  dispatch(getdata({
    city:city,
   cost:price,
    type_of_propety:housetype
  }))
  //filterbycost()

}

const filterbycost =()=>{
 console.log(filterddata,"datacost")
}

  return (
    <div>
        <Navbar/>
        <div className='homecontainer'>
<div className='serchboxcontainer'>
  <h2 >Search Properties to Rent</h2>
 <input  style ={{height:"50px",width:"40%",border:"1px solid", marginTop:"10px",borderRadius:"15px"}} placeholder='search with search bar'  />

</div>

<div className='filterContainer'>
<div className='location'>
<label className='label'>Location</label>
<br />

<select id="city" name="city" onChange={filterbycity}>
<option >find by city</option>
    <option value="Newjersey">Newjersey</option>
    <option value="Michigan">Michigan</option>
    <option value="Texas">Texas</option>
    <option value="Florida">Florida</option>
    <option value="Newyork">Newyork</option>
    <option value="Boston">Boston</option>
</select>

</div>
<div className='date'>
<label className='label'>Date</label>
<br />
<input type="date" id="date" placeholder='Select Move-in-Date' />


</div>
<div className='price'>
<label className='label'>Price</label>
<br />

<select id="price" name="price" onChange={filterbyprice}>
            <option value={null}>Price</option>
            <option value="2500">2000-2500</option>
            <option value="3000">2600-3000</option>
            <option value="3500">3100-3500</option>
            <option value="4000">3600-4000</option>
        </select>
</div>
<div className='property_type'>
<label className='label'>Property-type</label>
<br />
<select id="house" name="house" onChange={filterbyhousetype}>
            <option value="">Property Type</option>
            <option value='TownHouse'>TownHouse</option>
            <option value='Villa'>Villa</option>
            <option value='FarmHouse'>FarmHouse</option>
            <option value="Cottge">Cottage</option>
            <option value="Bunglaw">Bunglaw</option>

        </select>
</div>
<button className='searchbut' onClick={filterProperty}>Search</button>
</div>


<div className='housedata'>
   
   {datad?.length >0 && datad?.map((el)=>(
    <HouseCard el={el} />
   ))}
   </div>
        </div>
      
    </div>
  )
}

export default Home