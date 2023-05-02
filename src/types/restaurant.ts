import {Category} from './category';

export interface GEO {
  lat: number;
  lng: number;
}

export interface BaseRestaurant {
  id: number;
  name: string;
  rating: number;
  deliveryTimeMinMinutes: number;
  deliveryTimeMaxMinutes: number;
  logoURL: string;
}

export interface Restaurant extends BaseRestaurant {
  discount: number;
  geo: GEO;
  categories: Category[];
}
