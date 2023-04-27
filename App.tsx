import {SafeAreaView} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
