import axios from 'axios';

export const getCategories = () => {
  return axios.get('https://tenpo-ap.free.beeceptor.com/categories');
};
