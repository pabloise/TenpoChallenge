import {createSlice} from '@reduxjs/toolkit';
import {Restaurant} from '../../../types';
import {RootState} from '../../store';
import {fetchRestaurants} from './actions';

type InitialState = {
  data: Restaurant[];
  loading: boolean;
  error: boolean;
};

const initialState: InitialState = {
  data: [],
  loading: false,
  error: false,
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.data = [...action.payload];
      state.loading = false;
    });
    builder.addCase(fetchRestaurants.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchRestaurants.rejected, state => {
      state.loading = false;
      state.data = [];
      state.error = true;
    });
  },
});

export const selectRestaurants = (state: RootState) => state.restaurants.data;
export const selectIsRestaurantsError = (state: RootState) =>
  state.restaurants.error;
export const selectIsRestaurantsLoading = (state: RootState) =>
  state.restaurants.loading;

export default restaurantsSlice.reducer;
