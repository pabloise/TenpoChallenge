import {createSlice} from '@reduxjs/toolkit';
import {PermissionResult} from '../../../types';
import {RootState} from '../../store';
import {readLocationPermissions} from './actions';

type InitialState = {
  permissions: {
    location: PermissionResult | undefined;
  };
};

const initialState: InitialState = {
  permissions: {
    location: undefined,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(readLocationPermissions.fulfilled, (state, action) => {
      state.permissions.location = action.payload;
    });
  },
});

export const selectAppPermissions = (state: RootState) => state.app.permissions;

export default appSlice.reducer;
