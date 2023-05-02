import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const Container = styled.View`
  background-color: ${colors.white};
  padding: 33px 15px 0px 16px;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'GothamBold';
  font-size: 16px;
  color: ${colors.gray[900]};
  padding-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 12px;
  color: ${colors.gray[400]};
  padding-bottom: 13px;
`;

export const TextAreaElement = styled.TextInput`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray[100]};
  border-radius: 15px;
  width: 100%;
  height: 122px;
  margin-bottom: 36px;
  padding: 16px 14px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.green[200]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'GothamMedium';
  text-transform: uppercase;
`;
