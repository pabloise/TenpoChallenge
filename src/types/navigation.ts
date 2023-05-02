import type {StackNavigationProp} from '@react-navigation/stack';
import {Category} from './category';

export type MainStackParamList = {
  Home: undefined;
  Address: undefined;
  RestaurantDetails: {
    name: string;
    image: string;
    categories: Category[];
  };
};

export type MainStackRoutes = keyof MainStackParamList;

/**
 * For useNavigation hook - Use by passing the current stack screen name as a generic.
 * e.g. MainUseNavigationProps<"Home">
 */
export type MainUseNavigationProps<
  ScreenName extends MainStackRoutes = 'Home',
> = StackNavigationProp<MainStackParamList, ScreenName>;
