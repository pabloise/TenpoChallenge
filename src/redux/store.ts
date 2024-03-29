import {configureStore} from '@reduxjs/toolkit';
import appReducer from './modules/app/appSlice';
import restaurantsReducer from './modules/restaurants/restaurantsSlice';
import categoriesReducer from './modules/categories/categoriesSlice';
import favoritesReducer from './modules/favorites/favoritesSlice';
import userReducer from './modules/user/userSlice';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    app: appReducer,
    restaurants: restaurantsReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
