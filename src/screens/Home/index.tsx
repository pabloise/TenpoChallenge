import React from 'react';

import AddressButton from '../../components/AddressButton';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import HomeBody from '../../components/HomeBody';
import * as S from './styles';

const Home = () => {
  return (
    <S.StyledSafeAreaView>
      <S.ContainerView>
        <Header />
        <Hero />
      </S.ContainerView>
      <AddressButton />
      <HomeBody />
    </S.StyledSafeAreaView>
  );
};

export default Home;
