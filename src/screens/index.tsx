import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import useAppInit from '../hooks/useAppInit';

import Home from './Home';
import Address from './Address';

const Stack = createNativeStackNavigator();

export const MainNavigation: React.FC = (): any => {
  useAppInit();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Address' component={Address} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
