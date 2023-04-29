import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../../../types';
import {RootState} from '../../store';
import {fetchCategories} from './actions';

type InitialState = {
  data: Category[];
};

const initialState: InitialState = {
  data: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data = [...action.payload];
    });
  },
});

export const selectCategories = (state: RootState) => state.categories.data;

export default categoriesSlice.reducer;
