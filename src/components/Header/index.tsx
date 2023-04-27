import React from 'react';
// import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import Search from '../../assets/search-icon.svg';

import * as S from './styles';

const Header = () => {
  // const {t} = useTranslation();

  return (
    <S.View>
      <TouchableOpacity>
        <S.Image source={require('../../assets/avatar.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Search width={24} height={23.96} />
      </TouchableOpacity>
    </S.View>
  );
};

export default Header;
