import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // Ensure unique IDs, push item if not already in the cart
      const exists = state.some(item => item.id === action.payload.id);
      if (!exists) {
        state.push({
          ...action.payload,
          id: String(action.payload.id), // Ensure id is stored as a string
        });
      }
    },
    deleteFromCart(state, action) {
      // Use strict string comparison for id
      return state.filter(item => String(item.id) !== String(action.payload));
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
