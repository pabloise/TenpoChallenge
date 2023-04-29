import {createSlice} from '@reduxjs/toolkit';
import {Restaurant} from '../../../types';
import {RootState} from '../../store';
import {fetchRestaurants} from './actions';

type InitialState = {
  data: Restaurant[];
};

const initialState: InitialState = {
  data: [],
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.data = [...action.payload];
    });
  },
});

export const selectRestaurants = (state: RootState) => state.restaurants.data;

export default restaurantsSlice.reducer;
