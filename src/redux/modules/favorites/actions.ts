import {createAsyncThunk} from '@reduxjs/toolkit';
import {getFavorites} from '../../../api/getFavorites';

export const fetchFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async () => {
    const response = await getFavorites();

    return response.data;
  },
);
