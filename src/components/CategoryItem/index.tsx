import React from 'react';

import {Category} from '../../types';
import * as S from './styles';

type Props = {
  item: Category;
};

const CategoryItem: React.FC<Props> = ({item}) => {
  return (
    <S.CategoriesWrapper>
      <S.Slide>
        <S.Image source={{uri: item.imageURL}}>
          <S.Opacity>
            <S.Text>{item.nameES}</S.Text>
          </S.Opacity>
        </S.Image>
      </S.Slide>
    </S.CategoriesWrapper>
  );
};

export default CategoryItem;
