import { configureStore } from "@reduxjs/toolkit";
import { addToCardSlice } from "./addToCardSlice";

export const store = configureStore({
    reducer:{
        todo:addToCardSlice.reducer
    }

})