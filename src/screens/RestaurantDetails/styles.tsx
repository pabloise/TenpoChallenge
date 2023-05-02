import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const LeftSideHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddressContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const AddressTitle = styled.Text`
  font-family: 'GothamBold';
  color: ${colors.green[400]};
  font-size: 12px;
`;

export const AddressText = styled.Text`
  font-family: 'Gotham-Light';
  color: ${colors.green[400]};
  font-size: 16px;
`;

export const IconsContainer = styled.TouchableOpacity``;

export const RestaurantDetailContainer = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #fff;
  padding-top: 28px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const RestaurantImage = styled.Image`
  width: 140px;
  height: 140px;
`;

export const RestaurantTitle = styled.Text`
  font-family: 'GothamBold';
  font-size: 20px;
  padding-top: 20px;
`;

export const CategoriesContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export const Categories = styled.Text`
  font-family: 'Gotham-Book';
  font-size: 12px;
  color: ${colors.gray[400]};
`;

export const DetailsContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DetailText = styled.Text`
  font-family: 'Gotham-Book';
  font-size: 20px;
  color: ${colors.gray[400]};
`;
