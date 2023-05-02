import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {RESULTS} from 'react-native-permissions';
import {
  PROVIDER_GOOGLE,
  Marker,
  enableLatestRenderer,
  Region,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {selectAppPermissions} from '../../redux/modules/app/appSlice';
import {requestLocationPermissions} from '../../redux/modules/app/actions';
import {setAddress} from '../../redux/modules/user/userSlice';
import {useAppDispatch} from '../../hooks/useAppDispatch';

import {Address as AddressType, GEO, PermissionResult} from '../../types';
import {colors} from '../../theme/colors';

import AddressButton from '../../components/AddressButton';
import GoogleInput, {
  GoogleInputProps,
} from '../../components/GoogleInput/GoogleInput';
import DeliveryInfo from '../../components/DeliveryInfo';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import CustomMarker from '../../assets/marker.png';
import * as S from './styles';

const defaultRegion = {
  latitude: -32.9163154,
  longitude: -60.681749,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

enableLatestRenderer();

const Address = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation();

  const {location} = useSelector(selectAppPermissions);
  const [currentGEO, setCurrentGEO] = useState<GEO | undefined>();
  const [selectedLocation, setSelectedLocation] = useState<
    AddressType | undefined
  >();
  const [askedLocation, setAskedLocation] = useState(false);
  const [region, setRegion] = useState<Region | undefined>(defaultRegion);

  useEffect(() => {
    const canRequestLocationPermissions = location === RESULTS.DENIED;

    if (canRequestLocationPermissions) {
      dispatch(requestLocationPermissions());
    } else {
      setAskedLocation(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const locationRef = useRef<PermissionResult>();

  useEffect(() => {
    const hasLocationPermissionsGranted = location === RESULTS.GRANTED;
    locationRef.current = location;

    if (hasLocationPermissionsGranted) {
      Geolocation.getCurrentPosition(
        pos => {
          const currentPosition = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };

          setAskedLocation(true);
          setCurrentGEO(currentPosition);
          setRegion({
            latitude: currentPosition.lat,
            longitude: currentPosition.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        },
        error => {
          setAskedLocation(true);

          // Show an message or log this error
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else if (locationRef.current && locationRef.current !== location) {
      setAskedLocation(true);
    }
  }, [location]);

  const handleLocationSelect: GoogleInputProps['onLocationSelect'] = (
    data,
    detail,
  ) => {
    if (detail) {
      const userLocation = {
        description: data.description,
        geo: detail.geometry.location,
      };

      setRegion({
        latitude: userLocation.geo.lat,
        longitude: userLocation.geo.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setCurrentGEO(userLocation.geo);
      setSelectedLocation(userLocation);
    }
  };

  const isLocationPermissionGranted = location === RESULTS.GRANTED;

  const renderMap = useCallback(() => {
    const geo = selectedLocation?.geo || currentGEO;

    return isLocationPermissionGranted || geo ? (
      <S.MapView provider={PROVIDER_GOOGLE} region={region}>
        {geo && (
          <Marker
            coordinate={{
              latitude: geo.lat,
              longitude: geo.lng,
            }}
            image={CustomMarker}
          />
        )}
      </S.MapView>
    ) : (
      <S.NoMapView />
    );
  }, [isLocationPermissionGranted, selectedLocation, currentGEO, region]);

  const handleAddressSubmit = () => {
    dispatch(setAddress(selectedLocation));
    navigation.goBack();
  };

  return (
    <ScreenWrapper background={colors.green[100]} bottomBgColor={colors.white}>
      <S.ButtonContainer>
        <AddressButton />
      </S.ButtonContainer>
      <S.MapContainer>
        {askedLocation ? (
          renderMap()
        ) : (
          <S.NoMapView>
            <S.WaitingLocationText>
              {t('Address.WaitingLocation', 'Esperando tu ubicación...')}
            </S.WaitingLocationText>
          </S.NoMapView>
        )}
        <GoogleInput
          selected={!!currentGEO}
          onLocationSelect={handleLocationSelect}
          onPressClear={() => {}}
        />
      </S.MapContainer>
      <S.FormWrapper>
        {selectedLocation ? (
          <DeliveryInfo onSubmit={handleAddressSubmit} />
        ) : null}
      </S.FormWrapper>
    </ScreenWrapper>
  );
};

export default Address;
