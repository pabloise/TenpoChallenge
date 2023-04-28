import {BaseRestaurant} from './restaurant';

export interface Favorite {
  id: number;
  nameES: string;
  nameEN: string;
  restaurant: BaseRestaurant;
  imageURL: string;
}
