import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    getRestaurantCategory: (state, action) => {
      state.cateogry = [...state.category, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {getRestaurantCategory} = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurant.restaurant;

export default restaurantSlice.reducer;
