import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {AppDispatch} from '../../redux/store';
import {fetchRestaurants} from '../../redux/modules/restaurants/actions';
import {fetchCategories} from '../../redux/modules/categories/actions';
import {fetchFavorites} from '../../redux/modules/favorites/actions';
import {selectCategories} from '../../redux/modules/categories/categoriesSlice';
import {selectFavorites} from '../../redux/modules/favorites/favoritesSlice';
import {selectRestaurants} from '../../redux/modules/restaurants/restaurantsSlice';

import AddressButton from '../../components/AddressButton';
import CategoryItem from '../../components/CategoryItem';
import FavoriteItem from '../../components/FavoriteItem';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import RestaurantItem from '../../components/RestaurantItem';
import Carousel from '../../components/shared/Carousel/Carousel';
import * as S from './style';

const HomeBody = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchCategories());
    dispatch(fetchFavorites());
  }, [dispatch]);

  const {t} = useTranslation();

  const restaurants = useSelector(selectRestaurants);
  const categories = useSelector(selectCategories);
  const favorites = useSelector(selectFavorites);

  return (
    <S.StyledSafeAreaView>
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
    </S.StyledSafeAreaView>
  );
};

export default HomeBody;
