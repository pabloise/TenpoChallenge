import React, {useEffect} from 'react';
import {Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from '../../redux/store';
import {selectAppPermissions} from '../../redux/modules/app/appSlice';
import {readLocationPermissions} from '../../redux/modules/app/actions';

const Address = ({navigation}: any) => {
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

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>VOLVER</Text>
      </TouchableOpacity>
      <TextInput style={{backgroundColor: 'yellow', padding: 20}} />
    </SafeAreaView>
  );
};

export default Address;
