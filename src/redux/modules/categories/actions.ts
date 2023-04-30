import {createAsyncThunk} from '@reduxjs/toolkit';
import {getCategories} from '../../../api/getCategories';

export const fetchCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await getCategories();
    return response.data;
  },
);
