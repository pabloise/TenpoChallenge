import styled from 'styled-components/native';
import {colors} from '../../theme/colors';
import {Dimensions} from 'react-native';

export const RestaurantEmptyItemWrapper = styled.TouchableOpacity`
  background-color: ${colors.gray[200]};
  height: 120px;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get('window').width - 32}px;
  border-radius: 10px;
`;

export const EmptyItemMessage = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 16px;
`;
