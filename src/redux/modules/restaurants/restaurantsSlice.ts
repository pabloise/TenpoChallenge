import {createSlice} from '@reduxjs/toolkit';
import {Restaurant} from '../../../types';
import {RootState} from '../../store';

type InitialState = {
  data: Restaurant[];
};

const initialState: InitialState = {
  data: [],
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    getRestaurants: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {getRestaurants} = restaurantsSlice.actions;

export const selectRestaurants = (state: RootState) => state.restaurants.data;

export default restaurantsSlice.reducer;
