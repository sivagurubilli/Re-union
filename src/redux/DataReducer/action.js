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