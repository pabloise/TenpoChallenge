import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {MainUseNavigationProps} from '../../types';

import AddressIcon from '../../assets/AddressIcon.svg';
import * as S from './styles';

const AddressButton = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<MainUseNavigationProps>();

  const userAddress = useSelector((state: any) => state.user.address);

  return (
    <S.TouchableOpacity onPress={() => navigation.navigate('Address')}>
      <AddressIcon />
      {userAddress?.description ? (
        <S.AddressAvailableContainer>
          <S.AddressAvailableTitle>
            Enviaremos tus pedidos a
          </S.AddressAvailableTitle>
          <S.AddressAvailableText>
            {userAddress.description.substring(0, 35).concat('...')}
          </S.AddressAvailableText>
        </S.AddressAvailableContainer>
      ) : (
        <S.Text>
          {t('Home.AddDeliveryAddress', 'Agregar dirección de entrega')}
        </S.Text>
      )}
    </S.TouchableOpacity>
  );
};

export default AddressButton;
