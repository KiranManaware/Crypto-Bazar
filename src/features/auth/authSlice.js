import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authServices";

const userExist=JSON.parse(localStorage.getItem("user"))
const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:userExist||null,
        isLoading:false,
        isError:false,
        isSuccess:false,
        message:""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state,action)=>{
            state.isLoading=true
            state.isSuccess=false
            state.isError=false
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.user=action.payload
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
        })
        .addCase(loginUser.pending,(state,action)=>{
            state.isLoading=true
            state.isSuccess=false
            state.isError=false
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
            state.user=action.payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
        })
        .addCase(logOutUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=false
            state.user=null
            state.message=""
        })
    }
})

export default authSlice.reducer;

export const registerUser=createAsyncThunk("AUTH/REGISTER",async(formData,thunkAPI)=>{
    try {
        return await authServices.register(formData)
    } catch (error) {
        const message=error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
export const loginUser=createAsyncThunk("AUTH/LOGIN",async(formData,thunkAPI)=>{
    try {
        return await authServices.login(formData)
    } catch (error) {
        const message=error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
export const logOutUser=createAsyncThunk("AUTH/LOGOUT",async(user)=>{
    localStorage.removeItem("user");
})