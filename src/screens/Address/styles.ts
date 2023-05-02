import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import MapViewComponent from 'react-native-maps';

import {colors} from '../../theme/colors';

export const ButtonContainer = styled.View`
  padding-top: 24px;
  padding-bottom: 28px;
`;

export const MapContainer = styled.View`
  position: relative;
  z-index: 8;
`;

export const MapView = styled(MapViewComponent)`
  height: 300px;
  width: ${Dimensions.get('window').width}px;
  justify-content: flex-end;
  align-items: center;
`;

export const NoMapView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WaitingLocationText = styled.Text`
  color: ${colors.gray[400]};
`;

export const FormWrapper = styled.View`
  background-color: ${colors.white};
  flex: 1;
  z-index: 5;
`;
