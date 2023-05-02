import React from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {selectCategories} from '../../redux/modules/categories/categoriesSlice';
import {selectFavorites} from '../../redux/modules/favorites/favoritesSlice';
import {selectRestaurants} from '../../redux/modules/restaurants/restaurantsSlice';

import {colors} from '../../theme/colors';

import AddressButton from '../../components/AddressButton';
import RestaurantItem from '../../components/RestaurantItem';
import CategoryItem from '../../components/CategoryItem';
import FavoriteItem from '../../components/FavoriteItem';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Carousel from '../../components/shared/Carousel/Carousel';
import {ScreenWrapper} from '../../components/ScreenWrapper';
import * as S from './style';

const HomeBody = ({navigation}: any) => {
  const {t} = useTranslation();

  const restaurants = useSelector(selectRestaurants);
  const categories = useSelector(selectCategories);
  const favorites = useSelector(selectFavorites);

  return (
    <ScreenWrapper background={colors.gray[200]} bottomBgColor={colors.white}>
      <S.ContainerView>
        <Header />
        <Hero />
      </S.ContainerView>
      <AddressButton navigation={navigation} />
      <S.Container>
        <S.ScrollView showsVerticalScrollIndicator={false}>
          <S.CarouselsWrapper>
            <Carousel
              array={restaurants}
              ItemToRender={RestaurantItem}
              title={t('Home.RestaurantsTitle', 'Restaurantes')}
            />
            <Carousel
              array={categories}
              ItemToRender={CategoryItem}
              title={t('Home.CategoriesTitle', 'Categorías')}
            />
            <Carousel
              array={favorites}
              ItemToRender={FavoriteItem}
              title={t('Home.FavoritesTitle', 'Tus favoritos')}
            />
          </S.CarouselsWrapper>
        </S.ScrollView>
      </S.Container>
    </ScreenWrapper>
  );
};

export default HomeBody;
