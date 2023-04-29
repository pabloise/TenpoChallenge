import {createAsyncThunk} from '@reduxjs/toolkit';
import favorites from '../../../mocks/favorites';

export const fetchFavorites = createAsyncThunk(
  'favorites/getFavorites',
  async () => {
    const response = favorites;

    return response;
  },
);
