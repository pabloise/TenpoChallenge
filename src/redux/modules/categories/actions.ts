import {createAsyncThunk} from '@reduxjs/toolkit';
import categories from '../../../mocks/categories';

export const fetchCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = categories;

    return response;
  },
);
