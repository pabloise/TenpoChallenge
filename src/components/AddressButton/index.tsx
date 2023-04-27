import * as S from './styles';
import React from 'react';
import AddressButtonImage from '../../assets/AddressButtonImage.svg';

const AddressButton = () => {
  return (
    <S.TouchableOpacity>
      <AddressButtonImage />
    </S.TouchableOpacity>
  );
};

export default AddressButton;
