import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categories = createAsyncThunk("category", async () => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    console.log(response)
    return response.data.categories
})


export const mealSlice = createSlice({
    name: "meal",

    initialState: {
        isLoading: false,
        isRejected: false,
        categories: [],

    },
    reducers: {

    },
    extraReducers: {
        [categories.pending]: (state) => {
            state.isLoading = true
        },
        [categories.fulfilled]: (state, action) => {
            state.categories = action.payload
            state.isLoading = false
        }
    }

})
export default mealSlice.reducer