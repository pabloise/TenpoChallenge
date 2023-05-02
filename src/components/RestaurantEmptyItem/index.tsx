import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import {
  selectIsRestaurantsLoading,
  selectIsRestaurantsError,
} from '../../redux/modules/restaurants/restaurantsSlice';
import {fetchRestaurants} from '../../redux/modules/restaurants/actions';
import {useAppDispatch} from '../../hooks/useAppDispatch';

import * as S from './styles';
import {colors} from '../../theme/colors';

const RestaurantEmptyItem = () => {
  const dispatch = useAppDispatch();
  const isRestaurantsLoading = useSelector(selectIsRestaurantsLoading);
  const isRestaurantsError = useSelector(selectIsRestaurantsError);

  const handleEmptyPress = () => {
    dispatch(fetchRestaurants());
  };

  return (
    <S.RestaurantEmptyItemWrapper
      disabled={isRestaurantsLoading}
      onPress={handleEmptyPress}>
      {isRestaurantsLoading ? (
        <ActivityIndicator color={colors.green[300]} />
      ) : (
        <S.EmptyItemMessage>
          {isRestaurantsError
            ? 'There was an error trying to fetch the restaurants. Please, press here to retry.'
            : 'No data to load, press here to retry.'}
        </S.EmptyItemMessage>
      )}
    </S.RestaurantEmptyItemWrapper>
  );
};

export default RestaurantEmptyItem;
