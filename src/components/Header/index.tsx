import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

import * as S from './styles';

const Header = () => {
  const {t} = useTranslation();

  return (
    <S.View>
      <Text>{t('Home.Header', 'The header')}</Text>
    </S.View>
  );
};

export default Header;
