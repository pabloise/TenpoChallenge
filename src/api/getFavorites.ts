import axios from 'axios';

export const getFavorites = () => {
  return axios.get('https://tenpo-app.free.beeceptor.com/favorites');
};
