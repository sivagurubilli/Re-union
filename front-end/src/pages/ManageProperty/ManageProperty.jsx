import React, { useState } from 'react'

import  Navbar  from '../../components/Navbar/Navbar'
import axios from 'axios'
import "./ManageProperty.css"

export const ManageProperty = () => {
  const [propertytype, setPropertyType] = useState('')
  const [name, setName] = useState('')
  const [image,setImage] = useState('')
  const [bathroom,setbathrooms]= useState("")
  const [bedroom, setBedroom] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [cost, setCost] = useState('')
  const [area,setArea] = useState("")
  const [address, setAddress] = useState('')
const [size,setsize] = useState("")

  

  const handelAdd =async(e)=>{
    e.preventDefault()
   
    let payload={
      "image_url":image,
      "name": name,
      "type_of_propety": propertytype,
      "no_of_beds": bedroom,
      "no_of_bathrooms": bathroom,
      "size": size,
      "cost":cost,
      "address": address,
      "ispopular": true,
      "city": city,
      "movin_date": date,
      "booked": false
    }
    //add the property to houses data
    await axios.post("https://reunion-back.herokuapp.com/houses",payload)
    alert(" successfully added Property details ")
    

  }


  return (
    <div >
     
      <Navbar/>
      <div className="mainDiv">
        
        <div className="formcont">
           <h2 style={{marginTop:"-5px",marginBottom:"5px"}}>Add your Property to Estatery</h2>
           <form onSubmit={handelAdd}>
              <div>
                <select className="propertyType"  onChange={(e)=>setPropertyType(e.target.value)} required>
                 
                  <option value="">Property Type</option>
            <option value='TownHouse'>TownHouse</option>
            <option value='Villa'>Villa</option>
            <option value='FarmHouse'>FarmHouse</option>
            <option value="Cottage">Cottage</option>
            <option value="Bunglaw">Bunglaw</option>
                </select>
                <input className='propertyName' type="text" placeholder='Property name...' onChange={(e)=>setName(e.target.value)} required/>
              </div>
              <input className='imageAdd' type="text" placeholder='Add image of property...' onChange={(e)=>setImage(e.target.value)} required/>

              <select className='bedroom' onChange={(e)=> setBedroom(e.target.value)} required>
                <option value="">Number of Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <select className='bedroom' onChange={(e)=> setbathrooms(e.target.value)} required>
                <option value="">Number of Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <select className='bedroom' onChange={(e)=> setCity(e.target.value)} required>
                <option value="">Select City</option>
              <option value="Newjersey">Newjersey</option>
    <option value="Michigan">Michigan</option>
    <option value="Texas">Texas</option>
    <option value="Florida">Florida</option>
    <option value="Newyork">Newyork</option>
    <option value="Boston">Boston</option>
              </select>
              <div className="dateMain">
                  <div className="date">
                    {
                      date.length <= 0 ? "Availability Date" : date
                    } 
                    <input type="date" onChange={(e)=> setDate(e.target.value)}   min={Date.now()} max="2023-01-28" required/>
                  </div>
                  <input className="area" type="number" placeholder="Property  Area in square feet... " onChange={(e)=> setArea(e.target.value)} required/>
                  <input className='rent' type="number" placeholder='Property rent' onChange={(e)=> setCost(e.target.value)} />
              </div>
              <input className='adress' type="text" placeholder=' Property Address' onChange={(e)=> setAddress(e.target.value)} required />
              <button type='submit' className="postButton">Post your Property</button>

           </form>
        </div>

      </div>
    </div>
  )
}