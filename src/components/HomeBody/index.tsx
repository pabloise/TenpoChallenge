import React from 'react';
import * as S from './style';
import Carousel from '../shared/Carousel/Carousel';
import categoriesData from '../../data/categoriesData';
import restaurantsData from '../../data/restaurantsData';
import RestaurantItem from '../RestaurantItem';
import CategoryItem from '../CategoryItem';
import favoriteItem from '../FavoriteItem';
import favoritesData from '../../data/favoritesData';

const HomeBody = () => {
  return (
    <S.Container>
      <S.View>
        <Carousel
          array={restaurantsData}
          ItemToRender={RestaurantItem}
          title='RESTAURANTES'
        />
        <Carousel
          array={categoriesData}
          ItemToRender={CategoryItem}
          title='CATEGORÍAS'
        />
        <Carousel
          array={favoritesData}
          ItemToRender={favoriteItem}
          title='TUS FAVORITOS'
        />
      </S.View>
    </S.Container>
  );
};

export default HomeBody;
