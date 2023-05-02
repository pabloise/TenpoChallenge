import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCategories} from '../categories/actions';
import {fetchFavorites} from '../favorites/actions';
import {fetchRestaurants} from '../restaurants/actions';
import {checkLocation, requestLocation} from '../../../utils';

export const checkLocationPermissions = createAsyncThunk(
  'app/checkLocationPermissions',
  async () => await checkLocation(),
);

export const requestLocationPermissions = createAsyncThunk(
  'app/requestLocationPermissions',
  async () => await requestLocation(),
);

export const initialize = createAsyncThunk(
  'app/initialize',
  async (_, {dispatch}) => {
    await Promise.all([
      dispatch(fetchRestaurants()),
      dispatch(fetchCategories()),
      dispatch(fetchFavorites()),
      dispatch(checkLocationPermissions()),
    ]);
  },
);
