import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from '../../redux/store';
import {selectAppPermissions} from '../../redux/modules/app/appSlice';
import {readLocationPermissions} from '../../redux/modules/app/actions';
import GoogleInput from '../../utils/GoogleInput';
import {} from 'react-native-maps';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  enableLatestRenderer,
} from 'react-native-maps';

import * as S from './styles';
import AddressButton from '../../components/AddressButton';

enableLatestRenderer();
const Address = ({navigation}: any) => {
  const [locationSelected, setLoactionSelected] = useState<any>(null);
  const [region, setRegion] = useState<any>({
    latitude: -32.9163154,
    longitude: -60.681749,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleLoactionSelect = (
    data: any,
    details: {geometry: {location: {lat: any; lng: any}}},
  ) => {
    setRegion({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setLoactionSelected(details.geometry.location);
  };

  const dispatch = useDispatch<AppDispatch>();

  const {location} = useSelector(selectAppPermissions);
  useEffect(() => {
    dispatch(readLocationPermissions());
    // check(LOCATION_PERMISSION)
    //   .then(result => {
    //     switch (result) {
    //       case RESULTS.UNAVAILABLE:
    //         console.log(
    //           'This feature is not available (on this device / in this context)',
    //         );
    //         break;
    //       case RESULTS.DENIED:
    //         request(LOCATION_PERMISSION);
    //         console.log(
    //           'The permission has not been requested / is denied but requestable',
    //         );
    //         break;
    //       case RESULTS.LIMITED:
    //         request(LOCATION_PERMISSION);
    //         console.log('The permission is limited: some actions are possible');
    //         break;
    //       case RESULTS.GRANTED:
    //         console.log('The permission is granted');
    //         break;
    //       case RESULTS.BLOCKED:
    //         console.log('The permission is denied and not requestable anymore');
    //         break;
    //     }
    //   })
    //   .catch(error => {
    //     console.log('error: ', error);
    //     // …
    //   });
  }, [dispatch]);

  return (
    <S.SafeAreaView>
      <S.ScrollView>
        <AddressButton />
        <GoogleInput handleLocationSelected={handleLoactionSelect} />
        <MapView
          provider={PROVIDER_GOOGLE}
          region={region}
          style={{
            height: 800,
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {locationSelected && (
            <Marker
              coordinate={{
                latitude: locationSelected.lat,
                longitude: locationSelected.lng,
              }}
            />
          )}
        </MapView>
      </S.ScrollView>
    </S.SafeAreaView>
  );
};

export default Address;
