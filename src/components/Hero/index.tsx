import React from 'react';

import TenpoImage from '../../assets/TenpoEats.png';
import DeliverImage from '../../assets/DeliverImage.png';
import MotorcycleImage from '../../assets/MotorcycleImage.png';
import PhoneImage from '../../assets/PhoneImage.png';
import DotsImage from '../../assets/DotsImage.png';
import Cross1 from '../../assets/Cross1.png';
import Cross2 from '../../assets/Cross2.png';
import Cross3 from '../../assets/Cross3.png';
import Cross4 from '../../assets/Cross4.png';

import * as S from './styles';

const Hero = () => {
  return (
    <S.Container>
      <S.View>
        <S.TenpoImage source={TenpoImage} />
        <S.DeliverImage source={DeliverImage} />
      </S.View>
      <S.ImagesContainer>
        <S.MotorcycleImage source={MotorcycleImage} />
        <S.PhoneImage source={PhoneImage} />
        <S.DotsImage source={DotsImage} />
        <S.Cross1 source={Cross1} />
        <S.Cross2 source={Cross2} />
        <S.Cross3 source={Cross3} />
        <S.Cross4 source={Cross4} />
      </S.ImagesContainer>
    </S.Container>
  );
};

export default Hero;
