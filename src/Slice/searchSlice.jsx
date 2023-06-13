import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchedData = createAsyncThunk("search" , async(name) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
})

export const searchSlice = createSlice({
    name : "search" , 
    initialState: {
        inputValue : "",
        isLoading: false,
        searchedMeal: [],
    },
    reducers : {

    },
    extraReducers : {
        [searchedData.pending] : (state) => {
            state.isLoading = true
        } ,
        [searchedData.fulfilled] : (state , action) => {
            state.searchedMeal = action.payload
            state.isLoading = false
        } 
    }

})
export default searchSlice.reducer