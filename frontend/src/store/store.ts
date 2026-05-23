import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import fitnessReducer from './slices/fitnessSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fitness: fitnessReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/loginSuccess', 'fitness/fetchSuccess'],
        ignoredActionPaths: ['payload.createdAt', 'payload.updatedAt'],
        ignoredPaths: ['auth.user.createdAt', 'fitness.currentData.date'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
