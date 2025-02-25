import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  login: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.username = action.payload;
      state.login = true;
    },
    isLogout: (state) => {
      state.username = '';
      state.login = false;
    },
  },
});

export const { isLogin, isLogout } = loginSlice.actions;
export default loginSlice.reducer;
