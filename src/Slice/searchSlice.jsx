import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchedData = createAsyncThunk("search" , async(name) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    return response.data.meals
})

export const searchSlice = createSlice({
    name : "search" , 
    initialState: {
        inputValue : "",
        isLoading: false,
        mealName: "",
        searchedMeal: false,
    },
    reducers : {
        inputHandler : (state,action) => {
            state.inputValue = action.payload
        },
        submitHandler : (state,action) => {
            state.mealName = state.inputValue
            state.inputValue = ""
        }
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

export const {inputHandler , submitHandler} = searchSlice.actions 
export default searchSlice.reducer