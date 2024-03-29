import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const CategoriesWrapper = styled.View`
  align-items: flex-start;
  padding-right: 10px;
`;

export const Image = styled.ImageBackground`
  width: 155px;
  height: 65px;
`;

export const Slide = styled.TouchableOpacity`
  width: 150px;
  height: 65px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Opacity = styled.View`
  background-color: ${colors.blackOpacity};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-family: 'GothamUltra';
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  font-family: 'GothamBold';
`;
