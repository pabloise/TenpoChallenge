import React from 'react';
import {useTranslation} from 'react-i18next';

import Carousel from '../shared/Carousel/Carousel';
import RestaurantItem from '../RestaurantItem';
import categories from '../../mocks/categories';
import restaurants from '../../mocks/restaurants';
import CategoryItem from '../CategoryItem';
import FavoriteItem from '../FavoriteItem';
import favoritesData from '../../mocks/favorites';

import * as S from './style';

const HomeBody = () => {
  const {t} = useTranslation();

  return (
    <S.Container>
      <S.ScrollView>
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
            array={favoritesData}
            ItemToRender={FavoriteItem}
            title={t('Home.FavoritesTitle', 'Tus favoritos')}
          />
        </S.CarouselsWrapper>
      </S.ScrollView>
    </S.Container>
  );
};

export default HomeBody;
