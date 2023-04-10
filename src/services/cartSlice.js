import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const isExisted = state.cart.find((item) => item.id === action.payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
