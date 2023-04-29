import React from 'react';
import * as S from './styles';
import StarIcon from '../../assets/star.svg';

const RestaurantItem = ({item}: any) => {
  return (
    <S.RestaurantItemWrapper>
      <S.ImageWrapper>
        <S.Image source={{uri: item.logoURL}} />
        {item?.discount > 0 && <S.Circle></S.Circle>}
        <S.DiscountWrapper>
          {item?.discount > 0 && (
            <>
              <S.Percentaje>{item.discount}%</S.Percentaje>
              <S.DiscountText>DCTO</S.DiscountText>
            </>
          )}
        </S.DiscountWrapper>
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
