import React from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {MainNavigation} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';

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

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <MainNavigation>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </MainNavigation>
    </Provider>
  );
};

export default App;
