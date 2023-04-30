import axios from 'axios';

export const getRestaurants = () => {
  return axios.get('https://tenpo-ap.free.beeceptor.com/restaurants');
};
