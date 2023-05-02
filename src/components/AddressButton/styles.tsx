import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${colors.green[100]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 22px 0px;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  position: relative;
  margin-top: -10px;
`;

export const Text = styled.Text`
  padding-left: 10px;
  font-family: 'Gotham-Light';
  font-size: 16px;
  color: ${colors.green[300]};
`;
