import * as S from './styles';
import React from 'react';

const Hero = () => {
  return (
    <S.Container>
      <S.View>
        <S.TenpoImage source={require('../../assets/TenpoEats.png')} />
        <S.DeliverImage source={require('../../assets/DeliverImage.png')} />
      </S.View>
      <S.ImagesContainer>
        <S.MotorcycleImage
          source={require('../../assets/MotorcycleImage.png')}
        />
        <S.PhoneImage source={require('../../assets/PhoneImage.png')} />
        <S.DotsImage source={require('../../assets/DotsImage.png')} />
        <S.Cross1 source={require('../../assets/Cross1.png')} />
        <S.Cross2 source={require('../../assets/Cross2.png')} />
        <S.Cross3 source={require('../../assets/Cross3.png')} />
        <S.Cross4 source={require('../../assets/Cross4.png')} />
      </S.ImagesContainer>
    </S.Container>
  );
};

export default Hero;
