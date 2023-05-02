import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../../store';
import {Address} from '../../../types';

type InitialState = {
  // This should live the user data
  data: undefined;
  address?: Address;
};

const initialState: InitialState = {
  data: undefined,
  address: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const {setAddress} = userSlice.actions;

export const selectUserAddress = (state: RootState) => state.user.address;

export default userSlice.reducer;
