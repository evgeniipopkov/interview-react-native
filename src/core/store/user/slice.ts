import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from './interfaces';

const initialState: UserModel = {
  isRegistered: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state) => {
      state.isRegistered = true;
    },
  },
});

export const { register } = userSlice.actions;

export default userSlice.reducer;
