import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import * as S from './styles';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import {colors} from '../../theme/colors';
import ArrowIcon from '../../assets/LeftArrow.svg';
import SearchIcon from '../../assets/search-icon.svg';
import {useSelector} from 'react-redux';
import {Category} from '../../types';

const RestaurantDetails: React.FC<any> = ({route, navigation}) => {
  const userAddress = useSelector((state: any) => state.user.address);
  const {name, image, categories} = route.params;

  console.log('name image categories', name, image, categories);
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
            <S.Categories>
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
