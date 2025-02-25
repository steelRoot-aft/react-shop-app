import { createSlice } from '@reduxjs/toolkit';
import initialState from './productItems/productItems';

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
