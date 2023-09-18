import axios from "axios";
import {loginStart, loginFailed, loginSuccess} from "./authSlice"
import { getUsersStart, getUsersSuccess, getUsersFailed } from "./userSlice";
import { getFoodsStart, getFoodsSuccess,getFoodsFailed } from "./foodSlice";
import { registerStart, registerSuccess, registerFailed } from "./authSlice";
import { deleteUserStart,deleteUserSuccess,deleteUserFailed } from "./userSlice";
import { deleteFoodsStart,deleteFoodsSuccess,deleteFoodsFailed } from "./foodSlice";

export const loginUser = async(user, dispatch, navigate)=>{
    dispatch(loginStart());
    try{
       const res= await axios.post("/v1/auth/login", user);
       dispatch(loginSuccess(res.data));
       navigate("/")
    } catch(err){
        dispatch(loginFailed())

    }
};
export const registerUser= async(user, dispatch, navigate)=>{
    dispatch(registerStart());
    try{
        await axios.post("/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/login")
    } catch(err){
        dispatch(registerFailed());
    }
}
export const getAllUsers= async (accessToken, dispatch)=>{
    dispatch(getUsersStart());
    try{
        const res= await axios.get("/v1/user/get-user",{
            headers:  {token: `Bearer ${accessToken}`},

        });
        dispatch(getUsersSuccess(res.data));

    } catch(err){

        dispatch(getUsersFailed());
    }
}

export const deleteUser= async(accessToken, dispatch,id)=>{
    dispatch(deleteUserStart());
    try{
         const res=await axios.delete("/v1/user/"+id,{
            headers:  {token: `Bearer ${accessToken}`},
         });
         dispatch(deleteUserSuccess(res.data))
    } catch(err){
        dispatch(deleteUserFailed(err.response.data))

    }
}
export const getFood= async(accessToken, dispatch,id)=>{
    dispatch(getFoodsStart());
    try{
        const res=await axios.get("/food/get-food",{
            headers:  {token: `Bearer ${accessToken}`}
        });
        dispatch(getFoodsSuccess(res.data))
    } catch(err){
        dispatch(getFoodsFailed())
    }
}
export const deleteFood= async(accessToken, dispatch, id)=>{

    dispatch(deleteFoodsStart());

try{
const res = await axios.delete("/food/"+id,{
    headers:  {token: `Bearer ${accessToken}`}
});
dispatch(deleteFoodsSuccess(res.data))
} catch(err){
 dispatch(deleteFoodsFailed(err.response.data))
}}