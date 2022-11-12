import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import "./signup.css"

const Register = () =>{
  const [username,setusername] = useState()

  const [email,setemail] = useState()
  const [password,setpassword]= useState()

const navigate = useNavigate()
const dispatch = useDispatch()

  const handlesubmit=()=>{

    var dat ={}
    dat.eamil= email,
    dat.username= username,
    dat.password = password

    dispatch(dat)
    alert("user register succsfully")
    navigate("/loginuser")
    

  }


    
  return (
    <div>
<Navbar />

<div className='signinlayout'>

<input className='signininpput'  placeholder='username' onChange={(e)=>setusername(e.target.value)}>

</input>
<input className='signininpput' placeholder='email' onChange={(e)=>setemail(e.target.value)}>

</input>
<input  className='signininpput' placeholder='password' onChange={(e)=>setpassword(e.target.value)}>

</input>

<button className='signbut' onClick={handlesubmit}>register</button>
    </div>
    </div>
  )
}

export default Register