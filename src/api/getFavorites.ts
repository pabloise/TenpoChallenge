import axios from 'axios';

export const getFavorites = () => {
  return axios.get('https://tenpo-ap.free.beeceptor.com/favorites');
};
