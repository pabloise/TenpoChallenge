import React from 'react';
import {useTranslation} from 'react-i18next';

import * as S from './styles';

type Props = {
  onSubmit: () => void;
};

const DeliveryInfo: React.FC<Props> = ({onSubmit}) => {
  const {t} = useTranslation();

  return (
    <S.Container>
      <S.Title>
        {t('Address.Form.Title', 'Agregar información de entrega')}
      </S.Title>
      <S.Subtitle>
        {t('Address.Form.Subtitle', 'Depto, Oficina, Piso, Block.')}
      </S.Subtitle>
      <S.TextAreaElement multiline={true} numberOfLines={4} />
      <S.ButtonContainer onPress={onSubmit}>
        <S.ButtonText>
          {t('Address.Form.SubmitButton', 'Agregar dirección')}
        </S.ButtonText>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default DeliveryInfo;
