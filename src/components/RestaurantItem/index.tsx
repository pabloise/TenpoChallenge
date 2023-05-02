import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {selectAddress} from '../../redux/modules/user/userSlice';
import {MainUseNavigationProps} from '../../types';

import StarIcon from '../../assets/star.svg';
import * as S from './styles';

const RestaurantItem: React.FC<any> = ({item}) => {
  const navigation = useNavigation<MainUseNavigationProps>();
  const userAddress = useSelector(selectAddress);
  const handleRestaurantPress = () =>
    navigation.navigate('RestaurantDetails', {
      name: item.name,
      image: item.logoURL,
      categories: item.categories,
    });

  return (
    <S.RestaurantItemWrapper
      onPress={handleRestaurantPress}
      // prevent user to access to restaurant without an address selected
      disabled={!userAddress}>
      <S.ImageWrapper>
        <S.Image source={{uri: item.logoURL}} />
        {item?.discount > 0 ? (
          <S.DiscountWrapper>
            {item?.discount > 0 && (
              <>
                <S.Percentaje>{item.discount}%</S.Percentaje>
                <S.DiscountText>DCTO</S.DiscountText>
              </>
            )}
          </S.DiscountWrapper>
        ) : null}
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.RestaurantName>{item.name}</S.RestaurantName>
        <S.RatingWrapper>
          <S.Raiting>
            <StarIcon />
            <S.RatingText>{item.rating}</S.RatingText>
          </S.Raiting>
          <S.DelayText>
            {item.deliveryTimeMinMinutes}-{item.deliveryTimeMaxMinutes} min.
          </S.DelayText>
        </S.RatingWrapper>
      </S.InfoWrapper>
    </S.RestaurantItemWrapper>
  );
};

export default RestaurantItem;
