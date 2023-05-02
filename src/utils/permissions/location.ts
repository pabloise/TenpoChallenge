import {Platform} from 'react-native';
import {PERMISSIONS, request, check} from 'react-native-permissions';

const IOS_PERMISSIONS =
  parseInt(`${Platform.Version}`, 10) < 13
    ? PERMISSIONS.IOS.LOCATION_ALWAYS
    : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
const ANDROID_PERMISSIONS = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
const LOCATION_PERMISSION =
  Platform.OS === 'ios' ? IOS_PERMISSIONS : ANDROID_PERMISSIONS;

export const checkLocation = async () => check(LOCATION_PERMISSION);
export const requestLocation = async () => request(LOCATION_PERMISSION);
