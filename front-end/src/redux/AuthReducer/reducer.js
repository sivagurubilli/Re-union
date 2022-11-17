
import * as types from "./actiontypes"

//initial state
const initial = {
    loading: false,
    error: false,
    user: {},
    token: "",
    isLoggedIn: false,
  };
  
  export const userReducer = (state = initial, { type, payload }) => {
    switch (type) {
      case types.SIGNINSUCC:
        return{
            ...state,
              user:payload
        }
       
      default:
        return state;
    }
  };