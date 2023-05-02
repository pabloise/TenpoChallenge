import React from 'react';
import * as S from './styles';

const TextArea = () => {
  return (
    <S.Container>
      <S.Title>Agregar información de entrega</S.Title>
      <S.Subtitle>Depto, Oficina, Piso, Block,</S.Subtitle>
      <S.TextAreaElement multiline={true} numberOfLines={4} />
      <S.ButtonContainer>
        <S.ButtonText>AGREGAR DIRECCIÓN</S.ButtonText>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default TextArea;
