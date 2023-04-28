import React from 'react';
import * as S from './styles';

const CategoryItem = ({item}: any) => {
  return (
    <S.CategoriesWrapper>
      <S.CarouselHelper>
        <S.Slide>
          <S.Image source={{uri: item.imageURL}}>
            <S.Opacity>
              <S.Text>{item.nameES}</S.Text>
            </S.Opacity>
          </S.Image>
        </S.Slide>
      </S.CarouselHelper>
    </S.CategoriesWrapper>
  );
};

export default CategoryItem;
