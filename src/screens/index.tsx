import {NavigationContainer} from '@react-navigation/native';

export const MainNavigation: React.FC<any> = ({children}): any => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
