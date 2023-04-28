import React from 'react';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './store';

import AddressButton from './src/components/AddressButton';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import HomeBody from './src/components/HomeBody';

const App = () => {
  // const getData = async () => {
  //   try {
  //     const res = await axios.get(
  //       'https://tenpo-ap.free.beeceptor.com/categories',
  //     );
  //     setCategoriesData(res.data);
  //   } catch (error) {
  //     console.log('Error', error);
  //   }
  // };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StyledSafeAreaView>
          <ContainerView>
            <Header />
            <Hero />
          </ContainerView>
          <AddressButton />
          <HomeBody
          // restaurantData={restaurantData}
          // categoriesData={categoriesData}
          />
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
