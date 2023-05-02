import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const SafeAreaView = styled.SafeAreaView<{bgColor?: string}>`
  background-color: ${props => props.bgColor || colors.white};
  flex: 1;
`;

export const ContentWrapper = styled.View<{bgColor?: string}>`
  background-color: ${props => props.bgColor || colors.white};
  flex: 1;
`;

export const BottomBackground = styled.View<{bgColor?: string}>`
  background-color: ${props => props.bgColor || colors.white};
  position: absolute;
  bottom: -40px;
  right: 0;
  left: 0;
  height: 100px;
  z-index: -1000;
`;
