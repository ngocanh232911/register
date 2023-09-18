import { createSlice } from "@reduxjs/toolkit";
const foodSlice= createSlice({
    name: "foods",
    initialState:{
        foods:{
            allFoods: null,
          isFetching: false,
         error: false
        },  
        msg:""
    },
    reducers:{
        getFoodsStart:(state)=>{
            state.foods.isFetching=true;
        },
        getFoodsSuccess:(state,action)=>{
            state.foods.isFetching= false;
            state.foods.allFoods=action.payload;
        }, 
        getFoodsFailed:(state) =>{
            state.foods.isFetching=false;
            state.foods.error=true
        },
        deleteFoodsStart:(state, action)=>{
            state.foods.isFetching=true;

        },
        deleteFoodsSuccess:(state, action)=>{
            state.foods.isFetching=false;
            state.msg =action.payload;
        },
        deleteFoodsFailed:(state, action)=>{
        state.foods.isFetching=false;
        state.foods.error=true;
        state.msg= action.payload
        }

            
}})
export const { getFoodsStart, getFoodsSuccess, getFoodsFailed, deleteFoodsStart, deleteFoodsSuccess, deleteFoodsFailed}=foodSlice.actions;
export default foodSlice.reducer;