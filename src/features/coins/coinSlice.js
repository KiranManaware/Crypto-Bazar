import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinServices from "./coinServices";

const coinSlice=createSlice({
    name:"coins",
    initialState:{
        coins:[],
        trendingCoins:[],
        coin:{},
        isLoading:false,
        isSuccess:false,
        isError:false,
        theme:true
    },
    reducers:{
        changeTheme:(state,action)=>{
            return {
                ...state,
                theme:action.payload?false:true
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getTrendingCoins.pending,(state,action)=>{
            state.isLoading=true,
            state.isSuccess=false,
            state.isError=false
        })
        .addCase(getTrendingCoins.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.isError=false,
            state.trendingCoins=action.payload

        })
        .addCase(getTrendingCoins.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            state.isError=true,
            state.message=action.payload
        })
        .addCase(getSearchCoins.pending,(state,action)=>{
            state.isLoading=true,
            state.isSuccess=false,
            state.isError=false
        })
        .addCase(getSearchCoins.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.isError=false,
            state.coins=action.payload

        })
        .addCase(getSearchCoins.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            state.isError=true,
            state.message=action.payload
        })
        .addCase(getSpecificCoin.pending,(state,action)=>{
            state.isLoading=true,
            state.isSuccess=false,
            state.isError=false
        })
        .addCase(getSpecificCoin.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.isError=false,
            state.coin=action.payload

        })
        .addCase(getSpecificCoin.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            state.isError=true,
            state.message=action.payload
        })
    }
})

// Get Tranding coins thunk
export const getTrendingCoins=createAsyncThunk("FETCH/TREANDING/COINS",async(_,thunkAPI)=>{
    try {
        return await coinServices.fetchTrendindCoins();
    } catch (error) {
        console.log(error)
    }
})

// Get Search Coins thunk
export const getSearchCoins=createAsyncThunk("FETCH/SEARCH/COINS",async(query,thunkAPI)=>{
    try {
        console.log(query)
        return await coinServices.fetchSearchCoins(query);
    } catch (error) {
        
    }
})

// Get Specific Coin
export const getSpecificCoin=createAsyncThunk("FETCH/SPECIFIC/COIN",async(id,thunkAPI)=>{
    try {
        return await coinServices.fetchSpecificCoin(id)
    } catch (error) {
        console.log(error)
    }
})


export const {changeTheme}=coinSlice.actions
export default coinSlice.reducer;