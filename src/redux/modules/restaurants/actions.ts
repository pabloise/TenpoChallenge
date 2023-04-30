import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRestaurants} from '../../../api/getRestaurant';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async () => {
    const response = await getRestaurants();
    return response.data;
  },
);
