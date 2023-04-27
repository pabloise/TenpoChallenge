import React from 'react';
import Header from './src/components/Header';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './store';
import {Provider} from 'react-redux';

import styled from 'styled-components/native';
import Hero from './src/components/Hero';
import AddressButton from './src/components/AddressButton';
import RestaurantMain from './src/components/RestaurantMain';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StyledSafeAreaView>
          <ContainerView>
            <Header />
            <Hero />
          </ContainerView>
          <AddressButton />
          <RestaurantMain />
        </StyledSafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #f2f2f2;
  flex: 1;
`;

const ContainerView = styled.View`
  padding: 0px 15px 0px 16px;
`;

export default App;
