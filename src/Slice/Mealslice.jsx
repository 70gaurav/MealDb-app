import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const categoryData = createAsyncThunk("meal" , async() => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    console.log(response.data.categories)
    return response.data.categories


})

export const mealSlice = createSlice({
    name : "meal",
    initialState : {
        category : [],
        isLoading : false,
        isRejected : false,
    
    },

    reducers : {

    },
    extraReducers :{
        [categoryData.pending] : (state) => {
            state.isLoading = true
        },
        [categoryData.fulfilled] : (state , action) => {
            state.category = action.payload
            state.isLoading = false

        },
        [categoryData.rejected] : (state) => {
            state.isLoading = true
        },

    }
})
export default mealSlice.reducer