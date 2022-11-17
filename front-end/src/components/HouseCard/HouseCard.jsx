import React from 'react'
import "./Housecard.css"
import { useState } from 'react';
import {RiHeart3Fill} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import axios from "axios"
import { addfav } from '../../redux/DataReducer/action';


const HouseCard = ({el}) => {
  const  [toggleHeart, setToggleHeart] = useState(false)
const dispatch = useDispatch()



 const  changeColor =((el) =>{
  if(toggleHeart==false){
  axios.post(`https://reunion-back.herokuapp.com/wishlist`,el)
  localStorage.setItem("favdata",JSON.stringify(el))
    dispatch(addfav(el))
  setToggleHeart(!toggleHeart)
  }else if(toggleHeart==true){
    axios.delete(`https://reunion-back.herokuapp.com/id=${el.id}`)
    setToggleHeart(!toggleHeart)
    
   
  }
   })



  return (
    <div className='box1'>
   <img  style={{ width:"300px",height:"150px"}}src={el.image_url}></img>
<div className='box2'>
  <div className='price1'>
    <h3 className='cost'>${el.cost}/month</h3>
    <RiHeart3Fill className={
            toggleHeart ? 'heart_active' : 'heart'
          } onClick={()=>changeColor(el)}/>
  </div>
   <h3 className='name'>{el.name}</h3>
   <h3 className='name'>{el.type_of_propety}</h3>
<h4 className='address'>{el.address}</h4>

<div className='bed'>
  <div className='bed2'>
<img className='bed1' src="https://thumbs.dreamstime.com/z/bed-icon-vector-bedroom-illustration-symbol-hotel-logo-sign-bed-icon-vector-bedroom-illustration-symbol-hotel-logo-sign-156644795.jpg" alt="" />
<h4 className='nobeds' >{el.no_of_beds}beds</h4>
</div>
<div className='bed2'>
<img className='bed1' src="https://cdn2.vectorstock.com/i/1000x1000/58/36/shower-icon-bathroom-symbol-flat-vector-5575836.jpg" alt="" />
<h4 className='nobeds' >{el.no_of_bathrooms}bathrooms</h4>
</div>
<div className='bed2'>
<img className='bed1' src="https://cdn5.vectorstock.com/i/1000x1000/80/29/house-size-height-and-width-icon-vector-33988029.jpg" alt="" />
<h4 className='nobeds' >{el.size}</h4>
</div>
</div>

</div>

</div>

  )
}

export default HouseCard