import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../Slice/categorySlice";
import searchReducer from "../Slice/searchSlice"


export default configureStore ({
    reducer : {
        meal : mealReducer,
        search: searchReducer
    }
})