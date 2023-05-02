import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const RestaurantItemWrapper = styled.TouchableOpacity`
  width: 105px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  padding-top: 5px;
`;

export const RestaurantName = styled.Text`
  font-family: 'Gotham-Light';
  padding: 5px 0px;
`;

export const RatingText = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 11px;
  padding-left: 2px;
`;

export const DelayText = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 11px;
`;

export const ImageWrapper = styled.View``;

export const InfoWrapper = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const RatingWrapper = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Raiting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StarImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Image = styled.Image`
  width: 105px;
  height: 105px;
  position: relative;
  border-radius: 14px;
`;

export const DiscountWrapper = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${colors.green[200]};
  border-radius: 30px;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: -5px;
  top: -5px;
`;

export const Percentaje = styled.Text`
  font-size: 9px;
  color: ${colors.white};
  font-family: 'GothamMedium';
`;

export const DiscountText = styled.Text`
  font-family: 'GothamMedium';
  font-size: 7px;
  color: ${colors.white};
`;
