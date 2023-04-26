import {Text} from 'react-native';
import React from 'react';
import * as S from './styles';

type Props = {
  pepe: number;
};

const Header: React.FC<Props> = props => {
  console.log('props: ', props);

  return (
    <S.View>
      <Text>Header</Text>
    </S.View>
  );
};

export default Header;
