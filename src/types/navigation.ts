import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
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
 * Use by passing the current stack screen name as a generic.
 * e.g. NavProps<"Home">
 */
export type NavProps<ScreenName extends MainStackRoutes = 'RestaurantDetails'> =
  StackScreenProps<MainStackParamList, ScreenName>;

/**
 * For useNavigation hook - Use by passing the current stack screen name as a generic.
 * e.g. MainUseNavigationProps<"Home">
 */
export type MainUseNavigationProps<
  ScreenName extends MainStackRoutes = 'Home',
> = StackNavigationProp<MainStackParamList, ScreenName>;
