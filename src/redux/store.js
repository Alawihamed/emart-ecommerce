import { configureStore } from "@reduxjs/toolkit";
import WishlistReducer from "./wishlist";
import CartReducer from "./cart";

export const store = configureStore({
  reducer: {
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});
