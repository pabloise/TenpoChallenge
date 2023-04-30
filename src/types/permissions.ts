import {RESULTS} from 'react-native-permissions';

export type PermissionResult = ValueOf<typeof RESULTS>;

type ValueOf<T> = T[keyof T];
