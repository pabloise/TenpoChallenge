import React from 'react';
import * as S from './styles';

const FavoriteItem = ({item}: any) => {
  return (
    <S.FavoriteWrapper>
      <S.FoodImage source={{uri: item.imageURL}} />
      <S.RestaurantImage source={{uri: item.restaurant.imageURL}} />
      <S.Card>
        <S.RatingWrapper>
          <S.FavoriteName>{item.nameES}</S.FavoriteName>
          <S.Raiting>
            <S.RaitingText>{item.restaurant.rating}</S.RaitingText>
            <S.StarImage source={require('../../assets/estrella.png')} />
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
