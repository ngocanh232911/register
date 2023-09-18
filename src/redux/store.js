import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import userReducer  from "./userSlice"
import foodReducer from "./foodSlice"
export default configureStore({
    reducer:{
          auth: authReducer,
          foods: foodReducer, 
          users: userReducer,
    }
})