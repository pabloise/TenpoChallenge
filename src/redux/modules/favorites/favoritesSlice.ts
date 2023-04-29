import {createSlice} from '@reduxjs/toolkit';
import {Favorite} from '../../../types';
import {RootState} from '../../store';
import {fetchFavorites} from './actions';

type InitialState = {
  data: Favorite[];
};

const initialState: InitialState = {
  data: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.data = [...action.payload];
    });
  },
});

export const selectFavorites = (state: RootState) => state.favorites.data;

export default favoritesSlice.reducer;
