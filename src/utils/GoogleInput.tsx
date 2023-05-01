import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GoogleInput = ({handleLocationSelected}: any) => {
  return (
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{fields: 'geometry'}}
      placeholder='Escribe tu dirección'
      minLength={2}
      listViewDisplayed='auto'
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={handleLocationSelected}
      //   onPress={(data, details) => {
      //     onPlaceSelected(details);
      //     setLat(details?.geometry?.location.lat);
      //     setLng(details?.geometry?.location.lng);
      //   }}
      query={{
        type: 'geocode',
        key: 'AIzaSyC3n01VvB5qyKGHCX57KPxZrKdO_HyUwVQ',
        language: 'en',
      }}
    />
  );
};

export default GoogleInput;