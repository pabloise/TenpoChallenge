import React from 'react';
import {useSelector} from 'react-redux';

import SearchIcon from '../../assets/search-icon.svg';
import ArrowIcon from '../../assets/LeftArrow.svg';

import {ScreenWrapper} from '../../components/ScreenWrapper';
import {colors} from '../../theme/colors';
import * as S from './styles';

const RestaurantDetails: React.FC<any> = ({route, navigation}) => {
  const userAddress = useSelector((state: any) => state.user.address);
  const {name, image, categories} = route.params;

  return (
    <ScreenWrapper background={`${colors.green[100]}`} bottomBgColor='#fff'>
      <S.Header>
        <S.LeftSideHeader>
          <S.IconsContainer onPress={() => navigation.goBack()}>
            <ArrowIcon />
          </S.IconsContainer>
          <S.AddressContainer>
            <S.AddressTitle>Tu ubicación cercana</S.AddressTitle>
            {userAddress.description && (
              <S.AddressText>
                {userAddress.description.substring(
                  0,
                  userAddress.description.indexOf(','),
                )}
              </S.AddressText>
            )}
          </S.AddressContainer>
        </S.LeftSideHeader>
        <S.IconsContainer>
          <SearchIcon />
        </S.IconsContainer>
      </S.Header>
      <S.RestaurantDetailContainer>
        <S.RestaurantImage source={{uri: image}} />
        <S.RestaurantTitle>{name}</S.RestaurantTitle>
        <S.CategoriesContainer>
          {categories.map((item: any, index: number) => (
            <S.Categories key={index}>
              {item.nameES}
              {index !== categories.length - 1 ? ' - ' : ''}
            </S.Categories>
          ))}
        </S.CategoriesContainer>

        <S.DetailsContainer>
          <S.DetailText>Detalle de restaurante</S.DetailText>
        </S.DetailsContainer>
      </S.RestaurantDetailContainer>
    </ScreenWrapper>
  );
};

export default RestaurantDetails;
