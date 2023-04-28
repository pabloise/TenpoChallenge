import styled from 'styled-components/native';

export const FavoriteWrapper = styled.View`
  align-items: center;
  width: 250px;
  padding-top: 20;
`;

export const Card = styled.View`
  width: 240px;
  padding: 10px 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -5;
  border-width: 0.2;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0.2;
`;

export const FoodImage = styled.Image`
  width: 250px;
  height: 95px;
  position: relative;
  z-index: 1;
`;

export const RestaurantImage = styled.Image`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 15px;
  top: 28px;
  z-index: 2;
`;

export const RaitingText = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 12px;
  padding-right: 2px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RestoTitle = styled.Text`
  font-family: 'GothamBold';
  color: #06baa4;
`;

export const Text = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 12px;
  padding: 5px 0px;
`;

export const Raiting = styled.View`
  flex-direction: row;
  align-items: center;
`;
