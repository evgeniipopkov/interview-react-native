import { StatusBarStyle } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppModel } from './interfaces';

const initialState: AppModel = {
  showModal: false,
  barStyle: 'dark-content',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowModal: (state, { payload }: PayloadAction<boolean>) => {
      state.showModal = payload;
    },

    setBarStyle: (state, { payload }: PayloadAction<StatusBarStyle>) => {
      state.barStyle = payload;
    },
  },
});

export const { setShowModal, setBarStyle } = appSlice.actions;

export default appSlice.reducer;
