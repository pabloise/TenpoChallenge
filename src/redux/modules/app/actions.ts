import {Platform} from 'react-native';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {PERMISSIONS, request} from 'react-native-permissions';

export const readLocationPermissions = createAsyncThunk(
  'app/readLocationPermissions',
  async () => {
    const LOCATION_PERMISSION =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_ALWAYS
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    console.log('LOCATION_PERMISSION: ', LOCATION_PERMISSION);
    const response = await request(LOCATION_PERMISSION);
    console.log('response: ', response);
    return response;
  },
);
