import React from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {selectUserAddress} from '../../redux/modules/user/userSlice';

import {Category, NavProps} from '../../types';
import {colors} from '../../theme/colors';
import SearchIcon from '../../assets/search-icon.svg';
import ArrowIcon from '../../assets/LeftArrow.svg';

import {ScreenWrapper} from '../../components/ScreenWrapper';
import * as S from './styles';

const RestaurantDetails: React.FC<any> = ({
  route,
  navigation,
}: NavProps<'RestaurantDetails'>) => {
  const {t} = useTranslation();
  const userAddress = useSelector(selectUserAddress);
  const {name, image, categories} = route.params;

  return (
    <ScreenWrapper background={colors.green[100]} bottomBgColor={colors.white}>
      <S.Header>
        <S.LeftSideHeader>
          <S.IconsContainer onPress={() => navigation.goBack()}>
            <ArrowIcon />
          </S.IconsContainer>
          <S.AddressContainer>
            <S.AddressTitle>
              {t('RestaurantDetails.Title', 'Tu ubicación cercana')}
            </S.AddressTitle>
            {userAddress?.description ? (
              <S.AddressText>
                {userAddress.description.substring(
                  0,
                  userAddress.description.indexOf(','),
                )}
              </S.AddressText>
            ) : null}
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
          {(categories as Category[]).map((item, index) => (
            <S.Categories key={index}>
              {item.nameES}
              {index !== categories.length - 1 ? ' - ' : ''}
            </S.Categories>
          ))}
        </S.CategoriesContainer>

        <S.DetailsContainer>
          <S.DetailText>
            {t('RestaurantDetails.Details', 'Detalle de restaurante')}
          </S.DetailText>
        </S.DetailsContainer>
      </S.RestaurantDetailContainer>
    </ScreenWrapper>
  );
};

export default RestaurantDetails;
