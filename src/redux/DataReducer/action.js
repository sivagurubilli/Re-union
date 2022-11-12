import axios from "axios"
import * as types from "./actionTypes"

export const getdata =()=>(dispatch)=>{
 dispatch({type:types.GETDATAREQ})
 axios.get("http://localhost:3000/houses").then((res)=>{
  dispatch({type:types.GETDATA,payload:res.data})
 }).catch((err)=>{
 dispatch({type:types.GETDTAER,payload:err})
 })

}

export const getdata1 =(payload)=>(dispatch)=>{
const {city,cost,type_of_property} =payload
  dispatch({type:types.GETFILTREQ})
  axios.get(`https://reunion-back.herokuapp.com/houses?city=${city}&type_of_property=${type_of_property}`).then((res)=>{
   dispatch({type:types.GETFILTDATA,payload:res.data})
   return res.data
  }).catch((err)=>{
  dispatch({type:types.GETFILTERR,payload:err})
  })
 
 }

export const addfav =(payload) =>(dispatch)=>{
  dispatch({type:types.FAVREQ})
  dispatch({type:types.FAVSUCC,payload:payload})
  
}