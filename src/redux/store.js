import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import loginSlice from './loginSlice';

export default configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    login: loginSlice,
  },
});
