import {Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect} from 'react';

import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const Address = ({navigation}: any) => {
  useEffect(() => {
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log('error: ', error);

        // …
      });
  }, []);

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
