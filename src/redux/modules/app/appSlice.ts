import {createSlice} from '@reduxjs/toolkit';
import {PermissionResult} from '../../../types';
import {RootState} from '../../store';
import * as Actions from './actions';

type InitialState = {
  permissions: {
    location: PermissionResult | undefined;
  };
  initializing: boolean;
  initializingNonBlocking: boolean;
  complete: boolean;
};

const initialState: InitialState = {
  permissions: {
    location: undefined,
  },
  initializing: false,
  initializingNonBlocking: false,
  complete: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // permissions cases
    builder.addCase(
      Actions.checkLocationPermissions.fulfilled,
      (state, action) => {
        state.permissions.location = action.payload;
      },
    );
    builder.addCase(
      Actions.requestLocationPermissions.fulfilled,
      (state, action) => {
        state.permissions.location = action.payload;
      },
    );
    // init cases
    builder.addCase(Actions.initialize.pending, state => {
      state.initializing = true;
    });
    builder.addCase(Actions.initialize.fulfilled, state => {
      state.initializing = false;
      state.complete = true;
    });
    builder.addCase(Actions.initialize.rejected, state => {
      state.initializing = false;
    });
  },
});

export const selectAppPermissions = (state: RootState) => state.app.permissions;
export const selectAppInitializing = (state: RootState) =>
  state.app.initializing;

export default appSlice.reducer;
