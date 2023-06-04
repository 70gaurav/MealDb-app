import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../Slice/Mealslice";
import thunk from "redux-thunk";

export const Store = configureStore({
    reducer: {
        meal: mealReducer
    },
    middleware: [thunk]
});
