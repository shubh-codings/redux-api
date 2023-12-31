import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const login = createAsyncThunk("login", async()=>{
    // console.log(user)
    const response = await axios.post("https://reqres.in/api/login",{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
})
    console.log(response)
    return response.data
})

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoading:false,
        userData:{},
        isError:false
    },
    extraReducers: (builder)=>{
        builder.addCase(login.pending, (state,action)=>{
            state.isLoading = true
            console.log("pending....")
        })
        builder.addCase(login.fulfilled, (state,action)=>{
            state.isLoading = false
            state.userData = action.payload
            console.log('fullfilled....')
        })
        builder.addCase(login.rejected, (state,action)=>{ 
            state.isError = true
            console.log("Error : ", action.payload)
        })
    }
    
})

export default authSlice.reducer;
