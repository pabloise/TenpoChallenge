import React from 'react';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const GoogleInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Enter Country, City (your destination)'
      minLength={2}
      listViewDisplayed='auto'
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={data => {
        console.log(data.description);
      }}
      query={{
        key: 'AIzaSyC3n01VvB5qyKGHCX57KPxZrKdO_HyUwVQ',
        language: 'en',
      }}
    />
  );
};

export default GoogleInput;
