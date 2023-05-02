import type {StackNavigationProp} from '@react-navigation/stack';

export type MainStackParamList = {
  Home: undefined;
  Address: undefined;
  RestaurantDetails: undefined;
};

export type MainStackRoutes = keyof MainStackParamList;

/**
 * For useNavigation hook - Use by passing the current stack screen name as a generic.
 * e.g. MainUseNavigationProps<"Home">
 */
export type MainUseNavigationProps<
  ScreenName extends MainStackRoutes = 'Home',
> = StackNavigationProp<MainStackParamList, ScreenName>;
