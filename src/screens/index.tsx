import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Address from './Address';

const Stack = createNativeStackNavigator();

export const MainNavigation: React.FC = (): any => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AddressScreen' component={Address} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
