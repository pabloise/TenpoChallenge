import React from 'react';
import {ViewProps} from 'react-native';

import * as S from './styles';

interface Props extends ViewProps {
  children: React.ReactNode;
  background?: string;
  bottomBgColor?: string;
  testID?: string;
}

export const ScreenWrapper: React.FC<Props> = ({
  children,
  background,
  bottomBgColor,
  testID,
}) => {
  return (
    <S.SafeAreaView bgColor={background}>
      <S.ContentWrapper bgColor={background} testID={testID}>
        {children}
        {bottomBgColor ? <S.BottomBackground bgColor={bottomBgColor} /> : null}
      </S.ContentWrapper>
    </S.SafeAreaView>
  );
};
