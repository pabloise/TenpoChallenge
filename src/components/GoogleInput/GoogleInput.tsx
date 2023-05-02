import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import * as S from './style';
import {Text, View} from 'react-native';
import Search from '../../assets/search-icon.svg';

const GoogleInput = ({handleLocationSelected}: any) => {
  return (
    <S.Container>
      <GooglePlacesAutocomplete
        textInputProps={{clearButtonMode: 'never'}}
        styles={{
          textInput: {
            borderRadius: 20,
            fontFamily: 'Gotham-Book',
            fontSize: 16,
            paddingRight: '10%',
          },
        }}
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        renderRightButton={() => (
          <Search style={{position: 'absolute', right: 20, top: 10}} />
        )}
        placeholder='Escribe tu dirección'
        minLength={2}
        listViewDisplayed='auto'
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={handleLocationSelected}
        query={{
          type: 'geocode',
          key: 'AIzaSyC3n01VvB5qyKGHCX57KPxZrKdO_HyUwVQ',
          language: 'en',
        }}
        debounce={800}
        enablePoweredByContainer={false}
        nearbyPlacesAPI='GoogleReverseGeocoding'
        renderRow={rowData => {
          const optionTitle = rowData.structured_formatting.main_text;
          const optionAddress = rowData.structured_formatting.secondary_text;
          return (
            <View style={{paddingVertical: 5}}>
              <Text
                style={{
                  color: '#333333',
                  fontSize: 16,
                  fontFamily: 'Gotham-Book',
                  paddingBottom: 5,
                }}>
                {optionTitle}
              </Text>
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 12,
                  fontFamily: 'Gotham-Book',
                }}>
                {optionAddress}
              </Text>
            </View>
          );
        }}
      />
    </S.Container>
  );
};

export default GoogleInput;
