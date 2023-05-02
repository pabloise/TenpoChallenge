import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RESULTS} from 'react-native-permissions';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  enableLatestRenderer,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import {selectAppPermissions} from '../../redux/modules/app/appSlice';
import {requestLocationPermissions} from '../../redux/modules/app/actions';

import GoogleInput from '../../components/GoogleInput/GoogleInput';
import {useAppDispatch} from '../../hooks/useAppDispatch';

import AddressButton from '../../components/AddressButton';
import * as S from './styles';
import TextArea from '../../components/TextArea';

enableLatestRenderer();
const Address = () => {
  const dispatch = useAppDispatch();
  const {location} = useSelector(selectAppPermissions);
  const [locationSelected, setLoactionSelected] = useState<any>(null);
  const [region, setRegion] = useState<any>({
    latitude: -32.9163154,
    longitude: -60.681749,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const canRequestLocationPermissions = location === RESULTS.DENIED;

    if (canRequestLocationPermissions) {
      dispatch(requestLocationPermissions());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const hasLocationPermissionsGranted = location === RESULTS.GRANTED;

    if (hasLocationPermissionsGranted) {
      Geolocation.getCurrentPosition(
        pos => {
          console.log('pos', pos);
          const currentPosition = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };

          setLoactionSelected(currentPosition);
        },
        error => {
          //See error code charts below
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [location]);

  const handleLoactionSelect = (
    data: any,
    details: {geometry: {location: {lat: any; lng: any}}},
  ) => {
    console.log('selected location: ', {
      data,
      details,
    });
    setRegion({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setLoactionSelected(details.geometry.location);
  };

  const isLocationPermissionGranted = location === RESULTS.GRANTED;
  console.log('data', {isLocationPermissionGranted});

  return (
    <S.SafeAreaView>
      <S.ButtonContainer>
        <AddressButton />
      </S.ButtonContainer>
      <S.MapContainer>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={region}
          style={{
            height: 300,
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
            zIndex: 2,
          }}>
          {locationSelected && (
            <Marker
              coordinate={{
                latitude: locationSelected.lat,
                longitude: locationSelected.lng,
              }}
              image={require('../../assets/marker.png')}
            />
          )}
        </MapView>
        <GoogleInput handleLocationSelected={handleLoactionSelect} />
      </S.MapContainer>
      <TextArea />
    </S.SafeAreaView>
  );
};

export default Address;
