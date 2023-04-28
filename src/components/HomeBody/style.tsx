import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const Container = styled.View`
  background-color: ${colors.green[100]};
  flex: 1;
`;

export const View = styled.View`
  justify-content: center;
  background-color: white;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`;

export const Text = styled.Text`
  font-family: 'GothamBold';
`;
