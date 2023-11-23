import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('products/get',async()=>{
try {
        const response = await axios.get('https://fakestoreapi.com/products')
        // console.log(response.data)
        return response.data
} catch (error) {
    return error
}
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        reqStatus:"idle",
        data:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.isLoading="fetched"
        }) 
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading='loading'
        }) 
        builder.addCase(getProducts.rejected,(state,action)=>{
            state = state.push(action.payload)
            state.isLoading='error'
        }) 
    }
})

export default productSlice.reducer