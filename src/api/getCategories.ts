import axios from 'axios';

export const getCategories = () => {
  return axios.get('https://tenpo-app.free.beeceptor.com/categories');
};
