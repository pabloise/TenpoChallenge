import React, {useEffect, useState} from 'react';
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
import {Marker, enableLatestRenderer} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

enableLatestRenderer();
const Address = ({navigation}: any) => {
  const [lat, setLat] = useState<any>();
  const [lng, setLng] = useState<any>();

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

  console.log('location: ', location);
  console.log('Pepard lat', lat);
  console.log('Pepardo lng', lng);

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>VOLVER</Text>
        </TouchableOpacity>
        <GoogleInput setLat={setLat} setLng={setLng} />
        <View>
          <MapView
            style={{
              height: 800,
              width: 400,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: -32.9163154,
              longitude: -60.681749,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              description='delivery person'
              coordinate={{latitude: lat, longitude: lng}}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;
