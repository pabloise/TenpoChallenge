import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  padding: 33px 15px 0px 16px;
`;

export const Title = styled.Text`
  font-family: 'GothamBold';
  font-size: 16px;
  color: #333333;
  padding-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-family: 'Gotham-Light';
  font-size: 12px;
  color: #adadad;
  padding-bottom: 13px;
`;

export const TextAreaElement = styled.TextInput`
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 15px;
  width: 100%;
  height: 122px;
  margin-bottom: 36px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #2cbaa4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: 'GothamMedium';
`;
