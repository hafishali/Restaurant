import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthrestaurant=createAsyncThunk('restlist/fecthrestaurant',()=>{
    const result=axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})



const restslice=createSlice({
    name:'restlist',
    initialState:{
        // pending state
        loading:false,
        //resolve state 
        allrestaurant:[],
        searchrestaurant:[],
        // reject state
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fecthrestaurant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fecthrestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.allrestaurant=action.payload
            state.searchrestaurant=action.payload
            state.error=""
        })
        builder.addCase(fecthrestaurant.rejected,(state,action)=>{
            state.loading=false
            state.allrestaurant=""
            state.error=action.error.message
        })
    },
    reducers:{
        search:(state,action)=>{
            state.allrestaurant=state.searchrestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))


        }
    }
})
export const {search}=restslice.actions

export default restslice.reducer