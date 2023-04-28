import styled from 'styled-components/native';

export const CarouselWrapper = styled.View`
  flex-direction: row;
  padding-top: 38px;
  margin-left: 16px;
`;

export const Image = styled.ImageBackground`
  flex: 1;
`;

export const Opacity = styled.View`
  background-color: #00000048;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Slide = styled.TouchableOpacity`
  padding-top: 10;
  width: 150px;
  height: 65px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Text = styled.Text`
  color: white;
  font-family: 'GothamUltra';
  font-size: 10px;
  letter-spacing: 3px;
`;

export const CarouselHelper = styled.View`
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-family: 'GothamBold';
  text-transform: uppercase;
`;
