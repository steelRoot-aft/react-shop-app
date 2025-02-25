import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  countCart: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.count += 1; // Увеличиваем счетчик
      } else {
        // Если товар новый, добавляем его в корзину
        state.items.push({ ...action.payload, count: 1 });
      }
      state.total += action.payload.price;
      state.countCart += 1;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items[action.payload];
      if (itemToRemove.count !== 1) {
        itemToRemove.count -= 1;
        state.total -= itemToRemove.price
        state.countCart -= 1;
      } else {
        state.items = state.items.filter(
          (item, index) => index !== action.payload,
        );
        state.total -= itemToRemove.price;
        state.countCart -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
