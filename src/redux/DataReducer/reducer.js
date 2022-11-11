
import * as types from "./actiontypes"


var initstate ={
   housedata:[],
   filterddata:[],
   isLoading:false,
isError:false,
}

export const reducer =(state = initstate,action)=>{
   const {type,payload}= action
   console.log(payload,type)
   switch(type){
       case types.GETDATAREQ:
           return {
               ...state,
               isLoading:true
           }
           case types.GETDATA:
               return {
                   ...state,
                   hoteldata:payload
               }
               case types.GETDTAER:
                   return {
                       ...state,
                       isError:true
                   }
                  
                   default:
                       return state
   }
}