import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const FavoriteWrapper = styled.TouchableOpacity`
  align-items: center;
  width: 250px;
  margin-right: 15px;
  margin-bottom: 10px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

export const Card = styled.View`
  width: 250px;
  padding: 10px 5px;
  border-radius: 6px;
  border-width: 0.2px;
  border-color: ${colors.gray[300]};
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

export const FavoriteName = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 12px;
  display: flex;
`;

export const StarImage = styled.Image`
  width: 12px;
  height: 12px;
`;

export const RatingWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Raiting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RaitingText = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 12px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RestoTitle = styled.Text`
  font-family: 'GothamBold';
  color: ${colors.green[200]};
`;

export const Text = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 12px;
  padding: 5px 0px;
`;
