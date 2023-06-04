import { createSlice } from "@reduxjs/toolkit";


export const mealSlice = createSlice ({
    name : "meal",

    initialState : {
        isLoading : false,
        isRejected : false,
        categories : [],
        
    }
})