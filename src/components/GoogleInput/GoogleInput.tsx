import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TextStyle, View} from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {useTranslation} from 'react-i18next';

import {colors} from '../../theme/colors';

import SearchIcon from '../../assets/search-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';

import * as S from './styles';

export type GoogleInputProps = {
  onLocationSelect: (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null,
  ) => void;
  onPressClear: () => void;
  selected: boolean;
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 40,
    fontFamily: 'Gotham-Book',
    fontSize: 16,
    paddingRight: 50,
    paddingLeft: 24,
    height: 60,
    zIndex: 10,
    shadowColor: colors.gray[400],
    ...Platform.select<TextStyle>({
      ios: {
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },

      android: {
        elevation: 6,
      },
    }),
  },
  textInputSelected: {
    color: colors.green[300],
  },
});

const GoogleInput: React.FC<GoogleInputProps> = ({
  selected,
  onPressClear,
  onLocationSelect,
}) => {
  const {t} = useTranslation();
  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleInputFocus = () => {
    selected && onPressClear();
    setIsInputFocus(true);
  };
  const handleInputBlur = () => {
    setIsInputFocus(false);
  };

  return (
    <S.Container>
      <GooglePlacesAutocomplete
        textInputProps={{
          clearButtonMode: 'never',
          onFocus: handleInputFocus,
          onBlur: handleInputBlur,
          placeholderTextColor: colors.gray[400],
        }}
        styles={{
          textInput: [
            styles.textInput,
            selected && !isInputFocus ? styles.textInputSelected : undefined,
          ],
        }}
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        renderRightButton={() => (
          <S.RightIconContainer>
            {selected && !isInputFocus ? <CloseIcon /> : <SearchIcon />}
          </S.RightIconContainer>
        )}
        placeholder={t(
          'Address.AddresInputPlaceholder',
          'Escribe tu dirección',
        )}
        minLength={2}
        listViewDisplayed='auto'
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={onLocationSelect}
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
                  color: colors.gray[900],
                  fontSize: 16,
                  fontFamily: 'Gotham-Book',
                  paddingBottom: 5,
                }}>
                {optionTitle}
              </Text>
              <Text
                style={{
                  color: colors.gray[400],
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
