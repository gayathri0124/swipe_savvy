import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import businessSlice from './slices/businessSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    business: businessSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;