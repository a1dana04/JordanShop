import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  man: [],
  women:[],
  kids:[],
  details:{},
  search:[],
};
export const addToCardSlice = createSlice({
  name: "CREATEPRODUCT",
  initialState,
  reducers: {
    addProducts(state, action) {
      let findProduct = state.product.find((el) => el.id === action.payload.id);
      console.log(findProduct);
      if (!findProduct) {
        localStorage.setItem(
          "product",
          JSON.stringify([...state.product, action.payload])
        );
        state.product = [...state.product, action.payload];
      } else {
        console.log("bar");
      }
    },

    proSort(state, action) {
      if (action.payload === "expensive") {
        state.product = state.product.sort((a, b) => b.price - a.price);
      } else if (action.payload === "cheap") {
        state.product = state.product.sort((a, b) => a.price - b.price);
      }
    },
    manCategory(state, action) {
      state.man = state.product.filter((el) => el.category === "man");
    },
    womenCategory(state,action){
      state.women = state.product.filter((el)=>el.category === "women")
    },
    kidsCategory(state,action){
      state.kids = state.product.filter((el)=> el.category === "kids")
    },
    addBasket(state, action) {
      let basketFind = state.basket.find((el) => el.id === action.payload.id);
      if (!basketFind) {
        localStorage.setItem(
          "basket",
          JSON.stringify([...state.basket, action.payload])
        );
        state.basket = [...state.basket, action.payload];
      } else {
        console.log("bar");
      }
    },
    searchPro(state,action){
      state.search = state.product.filter((el)=>el.name === action.payload )
    },
    deleteBasket(state, action) {
      state.basket = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem(
        "basket",
        JSON.stringify([...state.basket, action.payload])
      );
    },
    detailsProduct(state,action){
      state.details = state.product.find((el)=>el.id === action.payload)
    }
  },
 
  
});
export const { addProducts, addBasket, deleteBasket, proSort, manCategory,womenCategory,kidsCategory,detailsProduct,searchPro } =
  addToCardSlice.actions;
export default addToCardSlice.reducer;
