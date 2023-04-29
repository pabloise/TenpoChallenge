import {createSlice} from '@reduxjs/toolkit';
import {Favorite} from '../../../types';
import {RootState} from '../../store';

type InitialState = {
  data: Favorite[];
};

const initialState: InitialState = {
  data: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    getFavorites: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {getFavorites} = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.data;

export default favoritesSlice.reducer;
