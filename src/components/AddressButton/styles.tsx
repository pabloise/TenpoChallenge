import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${colors.green[100]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
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
export const AddressAvailableContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  flex: 1;
  max-width: 280px;
`;

export const AddressAvailableTitle = styled.Text`
  font-family: 'Gotham-Light';
  color: ${colors.green[400]};
  font-size: 10px;
  padding-bottom: 3px;
`;

export const AddressAvailableText = styled.Text`
  font-family: 'Gotham-Light';
  color: ${colors.green[300]};
  font-size: 14px;
`;
