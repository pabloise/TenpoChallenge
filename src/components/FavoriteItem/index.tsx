import React from 'react';
import * as S from './styles';
import {TouchableOpacity} from 'react-native';
import StarIcon from '../../assets/star.svg';

const FavoriteItem = ({item}: any) => {
  return (
    <TouchableOpacity>
      <S.FavoriteWrapper>
        <S.FoodImage source={{uri: item.imageURL}} />
        <S.RestaurantImage source={{uri: item.restaurant.imageURL}} />
        <S.Card>
          <S.ProductInfo>
            <S.Text>{item.nameES}</S.Text>
            <S.Raiting>
              <S.RaitingText>{item.restaurant.rating}</S.RaitingText>
              <StarIcon />
            </S.Raiting>
          </S.ProductInfo>
          <S.ProductInfo>
            <S.RestoTitle>{item.restaurant.name}</S.RestoTitle>
            <S.Text>
              {item.restaurant.deliveryTimeMinMinutes}-
              {item.restaurant.deliveryTimeMaxMinutes} min.
            </S.Text>
          </S.ProductInfo>
        </S.Card>
      </S.FavoriteWrapper>
    </TouchableOpacity>
  );
};

export default FavoriteItem;
