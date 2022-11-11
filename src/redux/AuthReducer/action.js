import axios from "axios"
import * as types from "./actionTypes"

export const getdata =(payload)=>(dispatch)=>{
 dispatch({type:types.LOGINREQ})
 axios.post("http://localhost:3000/users",payload).then((res)=>{
  dispatch({type:types.LOGINSUCC,payload:res.data})
 }).catch((err)=>{
 dispatch({type:types.LOGINERR,payload:err})
 })

}