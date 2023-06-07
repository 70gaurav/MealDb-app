import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const categoryData = createAsyncThunk("meal" , async() => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    // console.log(response.data.categories)
    return response.data.categories


})
export const searchData = createAsyncThunk("search" , async(searchInput) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
   console.log(response)
   return response.data.meals


})

export const mealSlice = createSlice({
    name : "meal",
    initialState : {
        category : [],
        isLoading : false,
        isRejected : false,
        input: "",
        searchInput: "",
        searchedData : false
    
    },

    reducers : {
        inputHandler: (state , action) => {
            state.input = action.payload
        },
        submitHandler: (state) => {
            state.searchInput = state.input
            state.input = "" 
        }

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
        [searchData.pending] : (state) => {
            state.isLoading = true
        },
        [searchData.fulfilled] : (state , action) => {
            state.searchedData = action.payload
            state.isLoading = false

        },
        [searchData.rejected] : (state) => {
            state.isLoading = true
        },

    }
})
export const {inputHandler , submitHandler} = mealSlice.actions
export default mealSlice.reducer