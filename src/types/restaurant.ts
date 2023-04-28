import {Category} from './category';

interface GEO {
  lat: string;
  lng: string;
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
