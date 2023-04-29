import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {fetchRestaurants} from '../../redux/modules/restaurants/actions';
import {getCategories} from '../../redux/modules/categories/categoriesSlice';
import {getFavorites} from '../../redux/modules/favorites/favoritesSlice';
import {selectRestaurants} from '../../redux/modules/restaurants/restaurantsSlice';
import {AppDispatch} from '../../redux/store';

import RestaurantItem from '../RestaurantItem';
import CategoryItem from '../CategoryItem';
import FavoriteItem from '../FavoriteItem';
import Carousel from '../shared/Carousel/Carousel';
// import categories from '../../mocks/categories';
// import restaurants from '../../mocks/restaurants';
// import favoritesData from '../../mocks/favorites';

import * as S from './style';

const HomeBody = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const {t} = useTranslation();

  const restaurants = useSelector(selectRestaurants);
  const categories = useSelector(getCategories);
  const favorites = useSelector(getFavorites);

  return (
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
            title={t('Home.CategoriesTitle', 'Categorias')}
          />
          <Carousel
            array={favorites}
            ItemToRender={FavoriteItem}
            title={t('Home.FavoritesTitle', 'Tus favoritos')}
          />
        </S.CarouselsWrapper>
      </S.ScrollView>
    </S.Container>
  );
};

export default HomeBody;
