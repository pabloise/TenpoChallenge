import axios from 'axios';

export const getRestaurants = () => {
  return axios.get('https://tenpo-app.free.beeceptor.com/restaurants');
};
