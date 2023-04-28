import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as S from './styles';
import StarIcon from '../../assets/star.svg';

const RestaurantItem = ({item}: any) => {
  return (
    <TouchableOpacity>
      <S.RestaurantItemWrapper>
        <S.ImageWrapper>
          <S.Image source={item.image} />
          <S.Circle></S.Circle>
          <S.DiscountWrapper>
            <S.Percentaje>{item.discount}%</S.Percentaje>
            <S.DiscountText>DCTO</S.DiscountText>
          </S.DiscountWrapper>
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.RestaurantName>{item.name}</S.RestaurantName>
          <S.RatingWrapper>
            <S.Raiting>
              <StarIcon />
              <S.RatingText>{item.raiting}</S.RatingText>
            </S.Raiting>
            <S.DelayText>
              {item.delayMin}-{item.delayMax} min.
            </S.DelayText>
          </S.RatingWrapper>
        </S.InfoWrapper>
      </S.RestaurantItemWrapper>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
