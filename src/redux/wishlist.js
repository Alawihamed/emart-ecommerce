import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: [],
  },
  reducers: {
    addToWishlist: (state, data) => {
      const checkItem = state.count.find(
        (eachItem) => eachItem.id === data.payload.id
      );
      if (checkItem) {
        toast.warning("Item already in wishlist", { autoClose: 1500 });
      } else {
        state.count = [...state.count, data.payload];
        toast.success("Item added to wishlist", { autoClose: 1500 });
      }
    },
    removeFromWishlist: (state, data) => {
      state.count = state.count.filter(
        (eachitem) => eachitem.id !== data.payload.id
      );
      toast.success("Item removed from wishlist", { autoClose: 1500 });
    },
    removeAllFromWishlist: (state) => {
      state.count = [];
      toast.success("Items removed from wishlist", { autoClose: 1500 });
    },
  },
});

export const { addToWishlist, removeFromWishlist, removeAllFromWishlist } =
  counterSlice.actions;

export default counterSlice.reducer;
