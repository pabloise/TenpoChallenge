import React from 'react';
import {Platform, StyleSheet, TextStyle} from 'react-native';

import {colors} from '../../theme/colors';
import {Favorite} from '../../types';
import StarImage from '../../assets/estrella.png';

import * as S from './styles';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    shadowColor: colors.gray[400],
    ...Platform.select<TextStyle>({
      ios: {
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },

      android: {
        elevation: 3,
      },
    }),
  },
});

type Props = {
  item: Favorite;
};

const FavoriteItem: React.FC<Props> = ({item}) => {
  return (
    <S.FavoriteWrapper style={styles.wrapper}>
      <S.FoodImage source={{uri: item.imageURL}} />
      <S.RestaurantImage source={{uri: item.restaurant.logoURL}} />
      <S.Card>
        <S.RatingWrapper>
          <S.FavoriteName>{item.nameES}</S.FavoriteName>
          <S.Raiting>
            <S.RaitingText>{item.restaurant.rating}</S.RaitingText>
            <S.StarImage source={StarImage} />
          </S.Raiting>
        </S.RatingWrapper>
        <S.ProductInfo>
          <S.RestoTitle>{item.restaurant.name}</S.RestoTitle>
          <S.Text>
            {item.restaurant.deliveryTimeMinMinutes}-
            {item.restaurant.deliveryTimeMaxMinutes} min.
          </S.Text>
        </S.ProductInfo>
      </S.Card>
    </S.FavoriteWrapper>
  );
};

export default FavoriteItem;
