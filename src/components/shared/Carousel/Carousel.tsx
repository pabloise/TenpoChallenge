import React from 'react';
import {FlatList} from 'react-native';
import * as S from './style';

const Carousel = ({array, ItemToRender, title}: any) => {
  return (
    <S.CarouselWrapper>
      <S.CarouselHelper>
        <S.Title>{title}</S.Title>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={array}
          renderItem={ItemToRender}
          keyExtractor={item => item.id}
        />
      </S.CarouselHelper>
    </S.CarouselWrapper>
  );
};

export default Carousel;
