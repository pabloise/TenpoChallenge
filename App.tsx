import React from 'react';
import Header from './src/components/Header';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './store';
import {Provider} from 'react-redux';

import styled from 'styled-components/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StyledSafeAreaView>
          <Header />
        </StyledSafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #f2f2f2;
  flex: 1;
`;

export default App;
