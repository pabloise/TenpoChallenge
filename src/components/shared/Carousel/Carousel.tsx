import React from 'react';
import {FlatListProps} from 'react-native';

import {Category, Favorite, Restaurant} from '../../../types';
import * as S from './styles';

type CarouselItems = Restaurant | Category | Favorite;

type Props = {
  array: CarouselItems[];
  ItemToRender: React.FC<any>;
  ListEmptyComponent?: FlatListProps<CarouselItems>['ListEmptyComponent'];
  title: string;
};

const Carousel: React.FC<Props> = ({
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
