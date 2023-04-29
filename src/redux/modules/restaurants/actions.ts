import {createAsyncThunk} from '@reduxjs/toolkit';
import restaurants from '../../../mocks/restaurants';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async () => {
    const response = restaurants;

    return response;
  },
);
