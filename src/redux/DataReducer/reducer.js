
import * as types from "./actiontypes"


var initstate ={
   housedata:[],
   filtdata:[],
   favdata:[],
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
        case types.GETFILTREQ:
                    return {
                        ...state,
                        isError:false
                    }
        case types.GETFILTDATA:
                        return {
                            ...state,
                            housedata:[],
                            filtdata:payload
                         
                        }
             case types.GETFILTERR:
                            return {
                                ...state,
                                isError:true
                            }
                case types.FAVSUCC:
                            return{
                        ...state,
                        favdata:payload
                            }
                 
        default:
       return state
   }
}