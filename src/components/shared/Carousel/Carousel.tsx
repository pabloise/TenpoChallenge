import React from 'react';

import * as S from './styles';

const Carousel: React.FC<any> = ({
  array,
  ItemToRender,
  ListEmptyComponent,
  title,
}) => {
  return (
    <S.CarouselWrapper>
      <S.CarouselHelper>
        <S.Title>{title}</S.Title>
        <S.FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={array}
          renderItem={({item}) => <ItemToRender item={item} />}
          keyExtractor={item => String((item as any).id)}
          ListEmptyComponent={ListEmptyComponent}
        />
      </S.CarouselHelper>
    </S.CarouselWrapper>
  );
};

export default Carousel;
