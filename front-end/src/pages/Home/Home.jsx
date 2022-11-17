import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./home.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { getdata } from '../../redux/DataReducer/action'
import { getdata1} from '../../redux/DataReducer/action'
import {useDispatch,useSelector} from "react-redux"
import HouseCard from "../../components/HouseCard/HouseCard"
import axios from "axios"

const Home = () => {
   const [data,setdata] = useState([])
  const dispatch= useDispatch()

//get the data from redux-store using useSellector
  var  datad= useSelector((store)=>store.datareducer.hoteldata)      
      
      
       // get the data when component mount
       
       useEffect(()=>{
    dispatch(getdata())
       },[getdata])


       useEffect(()=>{
        axios.get("https://reunion-back.herokuapp.com/houses").then((res)=>{
          setdata(res.data)
        })
       
       },[dispatch,getdata])
    
//filter by city
                const filterbycity=(e)=>{
                   const {id,value} = e.target
               var housedata = datad.filter((el)=>el.city==value)
                  setdata(housedata)

                   }

 //filter by price
 const filterbyprice=(e)=>{
  const {id,value} = e.target
  var housedata = datad.filter((el)=>el.cost<=value && el.cost>=value-500)
  setdata(housedata)
  
}
//filter by house type
const filterbyhousetype=(e)=>{
  const {id,value} = e.target
  var housedata = datad.filter((el)=>el.type_of_propety==value)
setdata(housedata)
}



// search by name in search component
const searchByName =(el)=>{
  console.log(el.target.value)
var search = el.target.value
  const filtereddata = datad.filter(
  houses => {
    return (
      houses
      .name
      .toLowerCase()
      .includes(search.toLowerCase())
    );
  }
);
setdata(filtereddata)
}

  return (
    <div>
        <Navbar/>
        <div className='homecontainer'>
<div className='serchboxcontainer'>
  <h2 >Search Properties to Rent</h2>
 <input  style ={{height:"50px",width:"40%",border:"1px solid", marginTop:"10px",borderRadius:"15px"}}
  placeholder='search with search bar'  onChange={(el)=>searchByName(el)}/>
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
            <option value="Cottage">Cottage</option>
            <option value="Bunglaw">Bunglaw</option>

        </select>
</div>
<button className='searchbut' >Search</button>
</div>


<div className='housedata'>
   
   {data?.length >0 && data?.map((el)=>(
    <HouseCard el={el} />
   ))}
   </div>
        </div>
      
    </div>
  )
}

export default Home