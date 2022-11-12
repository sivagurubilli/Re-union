import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import "../Signup/signup.css"

const Loginuser = () =>{
  const [username,setusername] = useState()

  const [email,setemail] = useState()
  const [password,setpassword]= useState()


const navigate=  useNavigate()

  const handlesubmit=()=>{
    var dat ={}
    dat.eamil= email,
    dat.password = password

  var dat2 = JSON.parse(localStorage.getItem("userdata"))
  console.log(dat2)
    if(password==dat2.password){
      alert("login successfully")
      navigate("/")
    }
  }


    
  return (
    <div>
<Navbar/>

<div className='signinlayout'>

<input className='signininpput' placeholder='email' onChange={(e)=>setemail(e.target.value)}>

</input>
<input className='signininpput'  placeholder='password' onChange={(e)=>setpassword(e.target.value)}>


</input>
<button className='signbut' onClick={handlesubmit}>Login</button>
    </div>
    </div>
  )
}

export default Loginuser