import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const ContainerView = styled.View`
  padding: 0px 15px 0px 16px;
`;

export const Container = styled.View`
  background-color: ${colors.green[100]};
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  background-color: ${colors.white};
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`;

export const CarouselsWrapper = styled.View`
  padding: 38px 0px;
`;

export const Text = styled.Text`
  font-family: 'GothamBold';
`;
