import React from 'react';
import {TouchableOpacity} from 'react-native';

import Avatar from '../../assets/avatar.png';
import Search from '../../assets/search-icon.svg';

import * as S from './styles';

const Header = () => {
  return (
    <S.View>
      <TouchableOpacity>
        <S.Image source={Avatar} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Search width={24} height={23.96} />
      </TouchableOpacity>
    </S.View>
  );
};

export default Header;
