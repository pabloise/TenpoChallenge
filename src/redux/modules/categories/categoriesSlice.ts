import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../../../types';
import {RootState} from '../../store';

type InitialState = {
  data: Category[];
};

const initialState: InitialState = {
  data: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {getCategories} = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories.data;

export default categoriesSlice.reducer;
