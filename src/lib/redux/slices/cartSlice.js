import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    cartItemsCount: 0,
  },
  reducers: {
    setCart: () => {},
    emptyCart: () => {},
    checkout: () => {},
  },
});

/**
 const cartSlice = {
    name: 'cartSlice',
    reducer: {
        cart: [],
        cartItemsCount: 0,
    },
    actions: {
        setCart: () => {},
        emptyCart: () => {},
        checkout: () => {},
    },
 }
 */

export default cartSlice.reducer;
