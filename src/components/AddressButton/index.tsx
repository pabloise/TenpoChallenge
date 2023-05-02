import React from 'react';
import {Text} from 'react-native';
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
      {userAddress?.description ? <Text>{userAddress.description}</Text> : null}
      <AddressIcon />
      <S.Text>
        {t('Home.AddDeliveryAddress', 'Agregar dirección de entrega')}
      </S.Text>
    </S.TouchableOpacity>
  );
};

export default AddressButton;
