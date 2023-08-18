import { configureStore } from "@reduxjs/toolkit";
import questionGenReducer from "./questionGenSlice";

export const store = configureStore({
    reducer: {
        questiondetails: questionGenReducer
    }
})