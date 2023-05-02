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
import {useTranslation} from 'react-i18next';

import {selectAppPermissions} from '../../redux/modules/app/appSlice';
import {requestLocationPermissions} from '../../redux/modules/app/actions';
import {useAppDispatch} from '../../hooks/useAppDispatch';

import {GEO, PermissionResult} from '../../types';
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

  const {location} = useSelector(selectAppPermissions);
  const [selectedLocation, setSelectedLocation] = useState<GEO | null>(null);
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
          setSelectedLocation(currentPosition);
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
    console.log('selected location: ', {
      data,
      detail,
    });

    if (detail) {
      setRegion({
        latitude: detail.geometry.location.lat,
        longitude: detail.geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setSelectedLocation(detail.geometry.location);
    }
  };

  const isLocationPermissionGranted = location === RESULTS.GRANTED;

  const renderMap = useCallback(() => {
    return isLocationPermissionGranted ? (
      <S.MapView provider={PROVIDER_GOOGLE} region={region}>
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
            image={CustomMarker}
          />
        )}
      </S.MapView>
    ) : (
      <S.NoMapView />
    );
  }, [isLocationPermissionGranted, selectedLocation, region]);

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
          selected={!!selectedLocation}
          onLocationSelect={handleLocationSelect}
          onPressClear={() => {}}
        />
      </S.MapContainer>
      <S.FormWrapper>
        {selectedLocation ? <DeliveryInfo /> : null}
      </S.FormWrapper>
    </ScreenWrapper>
  );
};

export default Address;
