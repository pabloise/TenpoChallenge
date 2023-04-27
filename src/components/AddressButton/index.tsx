import * as S from './styles';
import React from 'react';

import AddressIcon from '../../assets/AddressIcon.svg';

const AddressButton = () => {
  return (
    <S.TouchableOpacity>
      <AddressIcon />
      <S.Text>Agregar dirección de entrega</S.Text>
    </S.TouchableOpacity>
  );
};

export default AddressButton;
