import React from 'react';
import * as S from './styles';
import {TouchableOpacity} from 'react-native';
import StarIcon from '../../assets/star.svg';

const FavoriteItem = ({item}: any) => {
  return (
    <TouchableOpacity>
      <S.FavouriteWrapper>
        <S.FoodImage source={item.foodImage} />
        <S.RestaurantImage source={item.restaurantImage} />
        <S.Card>
          <S.ProductInfo>
            <S.Text>{item.favorite}</S.Text>
            <S.Raiting>
              <S.RaitingText>{item.rating}</S.RaitingText>
              <StarIcon />
            </S.Raiting>
          </S.ProductInfo>
          <S.ProductInfo>
            <S.RestoTitle>{item.restaurantName}</S.RestoTitle>
            <S.Text>
              {item.delayMin}-{item.delayMax} min.
            </S.Text>
          </S.ProductInfo>
        </S.Card>
      </S.FavouriteWrapper>
    </TouchableOpacity>
  );
};

export default FavoriteItem;
