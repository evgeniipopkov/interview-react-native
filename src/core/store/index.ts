import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userSlice, appSlice } from './slices';
import { coursesAPI } from '../services';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  app: appSlice,
  user: userSlice,
  [coursesAPI.reducerPath]: coursesAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
    .concat(coursesAPI.middleware)
  ,
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);

export default store;
