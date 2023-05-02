import axios from 'axios';
import {getIsRestaurantURL, shuffle} from './failureHelpers';

let restaurantCalls: boolean[] = [];

// Intercepts the /restaurant request in order to make it manually and randomly fail 2 of 10
axios.interceptors.request.use(
  config => {
    const isRestaurantURL = getIsRestaurantURL(config?.url);

    if (isRestaurantURL) {
      if (!restaurantCalls.length) {
        const randomFailures = shuffle();
        restaurantCalls = [...randomFailures];
      }

      const makeItFail = restaurantCalls.shift();

      if (makeItFail) {
        console.info('Make restaurant API manually fail');
        return {
          ...config,
          url: config.url + '/failure',
        };
      }
      console.info('SKIP - Make restaurant API manually fail');
    }
    return config;
  },
  error => Promise.reject(error),
);
