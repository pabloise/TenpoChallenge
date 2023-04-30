import React from 'react';
import {useTranslation} from 'react-i18next';

import AddressIcon from '../../assets/AddressIcon.svg';
import * as S from './styles';

const AddressButton = ({navigation}: any) => {
  const {t} = useTranslation();

  return (
    <S.TouchableOpacity onPress={() => navigation.navigate('Address')}>
      <AddressIcon />
      <S.Text>
        {t('Home.AddDeliveryAddress', 'Agregar dirección de entrega')}
      </S.Text>
    </S.TouchableOpacity>
  );
};

export default AddressButton;
