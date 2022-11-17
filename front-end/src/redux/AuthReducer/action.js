import axios from "axios"
import * as types from "./actionTypes"

//registation function
export const regiter =(payload)=>(dispatch)=>{
 dispatch({type:types.SIGNINREQ})
 axios.post("https://reunion-back.herokuapp.com/users",payload).then((res)=>{
  dispatch({type:types.SIGNINSUCC,payload:res.data})
 }).catch((err)=>{
 dispatch({type:types.SIGNINERR,payload:err})
 })

}