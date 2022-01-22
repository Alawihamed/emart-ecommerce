import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartItemserSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, data) => {
      const checkItem = state.cartItems.find(
        (eachItem) => eachItem.id === data.payload.id
      );
      if (checkItem) {
        state.cartItems.forEach((eachItem) => {
          if (eachItem.id === data.payload.id) {
            eachItem.quntity += 1;
            state.total = 0;
            state.cartItems.forEach((eachItem) => {
              let itemCost = eachItem.quntity * eachItem.price;
              state.total = state.total + itemCost;
            });
          }
        });
        toast.warning("Product Quntity Update", { autoClose: 1500 });
      } else {
        state.cartItems = [...state.cartItems, data.payload];
        toast.success("Item added to cart", { autoClose: 1500 });
        state.total = 0;
        state.cartItems.forEach((eachItem) => {
          let itemCost = eachItem.quntity * eachItem.price;
          state.total = state.total + itemCost;
        });
      }
    },
    removeFromCart: (state, data) => {
      state.cartItems = state.cartItems.filter(
        (eachitem) => eachitem.id !== data.payload.id
      );
      state.total = 0;
      state.cartItems.forEach((eachItem) => {
        let itemCost = eachItem.quntity * eachItem.price;
        console.log(itemCost);
        state.total = state.total + itemCost;
      });
      toast.success("Item removed from cart", { autoClose: 1500 });
    },
    incrementQuntity: (state, data) => {
      state.cartItems.forEach((eachItem) => {
        if (eachItem.id === data.payload) {
          if (eachItem.quntity < 10) {
            eachItem.quntity += 1;
            state.total = 0;
            state.cartItems.forEach((eachItem) => {
              let itemCost = eachItem.quntity * eachItem.price;
              console.log(itemCost);
              state.total = state.total + itemCost;
            });
          }
        }
      });
    },
    decrementQuntity: (state, data) => {
      state.cartItems.forEach((eachItem) => {
        if (eachItem.id === data.payload) {
          if (eachItem.quntity > 1) {
            eachItem.quntity -= 1;
            state.total = 0;
            state.cartItems.forEach((eachItem) => {
              let itemCost = eachItem.quntity * eachItem.price;
              console.log(itemCost);
              state.total = state.total + itemCost;
            });
          }
        }
      });
    },
    removeAllFromCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      toast.success("Items removed from cart", { autoClose: 1500 });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuntity,
  decrementQuntity,
  removeAllFromCart,
} = cartItemserSlice.actions;

export default cartItemserSlice.reducer;
