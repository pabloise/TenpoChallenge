import React from 'react';

import * as S from './styles';

const Carousel: React.FC<any> = ({array, ItemToRender, title}) => {
  return (
    <S.CarouselWrapper>
      <S.CarouselHelper>
        <S.Title>{title}</S.Title>
        <S.FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={array}
          renderItem={ItemToRender}
          keyExtractor={item => String((item as any).id)}
        />
      </S.CarouselHelper>
    </S.CarouselWrapper>
  );
};

export default Carousel;
