import styled from 'styled-components/native';

export const FavoriteWrapper = styled.TouchableOpacity`
  align-items: center;
  width: 250px;
  margin-right: 15px;
`;

export const Card = styled.View`
  width: 250px;
  padding: 10px 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-width: 0.2px;
  border-radius: 2px;
  border-color: #ddd;
  border-bottom-width: 0.2px;
`;

export const FoodImage = styled.Image`
  width: 250px;
  height: 95px;
  position: relative;
  z-index: 1;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
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
