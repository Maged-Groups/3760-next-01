import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [
      {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        quantity: 5,
      },
      {
        id: 8,
        title: "Eyeshadow Palette with Mirror",
        quantity: 2,
      },
    ],
    cartItemsCount: 7,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const exists = state.cart.find((itm) => itm.id === payload.id);

      if (exists) {
        exists.quantity++;
      } else {
        // payload.quantity = 1;
        // state.cart.push(payload);
        // OR
        state.cart.push({ ...payload, quantity: 1 }); // Spread operator
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((itm) => itm.id !== id);
    },
    emptyCart: () => {},
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
