import {configureStore} from '@reduxjs/toolkit';
import restaurantsReducer from './modules/restaurants/restaurantsSlice';
import categoriesReducer from './modules/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
