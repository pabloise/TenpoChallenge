import {Favorite} from '../types';

const favorites: Favorite[] = [
  {
    id: 1,
    nameES: 'Big Mac McCombo Grande',
    nameEN: 'Big Mac McCombo Large',
    restaurant: {
      id: 1,
      name: 'McDonalds',
      rating: 5,
      deliveryTimeMinMinutes: 25,
      deliveryTimeMaxMinutes: 50,
      logoURL:
        'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/1-nuevo-logo-mc-logo.jpg',
    },
    imageURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/favorites/1-favorites.jpg',
  },
  {
    id: 2,
    nameES: 'Pizza con provolone napolitana Extra Grande',
    nameEN: 'Neapolitan provolone pizza Extra Large',
    restaurant: {
      id: 3,
      name: 'PITZA',
      rating: 3.5,
      deliveryTimeMinMinutes: 15,
      deliveryTimeMaxMinutes: 30,
      logoURL:
        'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/3-pitsa-logo.jpg',
    },
    imageURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/favorites/2-favorites.jpg',
  },
  {
    id: 3,
    nameES: 'Milanesa Americana con guarnición',
    nameEN: 'American Milanesa with side dishes',
    restaurant: {
      id: 7,
      name: 'El Club de la Milanesa',
      rating: 4,
      deliveryTimeMinMinutes: 20,
      deliveryTimeMaxMinutes: 30,
      logoURL:
        'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/7-el-club-de-la-milanesa.jpg',
    },
    imageURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/favorites/3-favorites.jpg',
  },
  {
    id: 4,
    nameES: 'Paleta de chocolate blanco crock',
    nameEN: 'White chocolate crock palette',
    restaurant: {
      id: 8,
      name: 'Marbet Helados Gourmet',
      rating: 4.5,
      deliveryTimeMinMinutes: 15,
      deliveryTimeMaxMinutes: 25,
      logoURL:
        'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/8-marbet-helados-gourmet.jpg',
    },
    imageURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/favorites/4-favorites.jpg',
  },
];

export default favorites;
