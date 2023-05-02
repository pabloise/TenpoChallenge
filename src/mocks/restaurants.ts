import {Restaurant} from '../types';

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'McDonalds',
    rating: 5,
    deliveryTimeMinMinutes: 25,
    deliveryTimeMaxMinutes: 50,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/1-nuevo-logo-mc-logo.jpg',
    discount: 25,
    geo: {
      lat: -32.9309593,
      lng: -60.6758936,
    },
    categories: [
      {
        id: 1,
        nameES: 'Hamburguesas',
        nameEN: 'Burgers',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/1-Burgers.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'The Bronx Street Food',
    rating: 4.5,
    deliveryTimeMinMinutes: 10,
    deliveryTimeMaxMinutes: 25,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/2-the-bronx-street-food.png',
    discount: 20,
    geo: {
      lat: -32.9302191,
      lng: -60.6908196,
    },
    categories: [
      {
        id: 3,
        nameES: 'Picadas',
        nameEN: 'Cold cuts',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/3-Picadas.jpg',
      },
      {
        id: 1,
        nameES: 'Hamburguesas',
        nameEN: 'Burgers',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/1-Burgers.jpg',
      },
      {
        id: 7,
        nameES: 'Empanadas',
        nameEN: 'Empanadas',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/7-Empanadas.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'PITZA',
    rating: 3.5,
    deliveryTimeMinMinutes: 15,
    deliveryTimeMaxMinutes: 30,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/3-pitsa-logo.jpg',
    discount: 40,
    geo: {
      lat: -32.9311993,
      lng: -60.6813069,
    },
    categories: [
      {
        id: 4,
        nameES: 'Pizzas',
        nameEN: 'Pizzas',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/4-Pizzas.jpg',
      },
      {
        id: 7,
        nameES: 'Empanadas',
        nameEN: 'Empanadas',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/7-Empanadas.jpg',
      },
    ],
  },
  {
    id: 4,
    name: "John's Burgers",
    rating: 4,
    deliveryTimeMinMinutes: 30,
    deliveryTimeMaxMinutes: 45,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/4-john-s-burgers-centro.jpg',
    discount: 30,
    geo: {
      lat: -32.9311993,
      lng: -60.6813069,
    },
    categories: [
      {
        id: 1,
        nameES: 'Hamburguesas',
        nameEN: 'Burgers',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/1-Burgers.jpg',
      },
    ],
  },
  {
    id: 5,
    name: 'JIMMY',
    rating: 4.5,
    deliveryTimeMinMinutes: 20,
    deliveryTimeMaxMinutes: 30,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/5-jimmy-logo.jpg',
    discount: 0,
    geo: {
      lat: -32.9311993,
      lng: -60.6813069,
    },
    categories: [
      {
        id: 3,
        nameES: 'Picadas',
        nameEN: 'Cold cuts',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/3-Picadas.jpg',
      },
      {
        id: 8,
        nameES: 'Cervezas',
        nameEN: 'Beers',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/8-Cervezas.jpg',
      },
    ],
  },
  {
    id: 6,
    name: 'Placeres, vinos y algo más',
    rating: 4,
    deliveryTimeMinMinutes: 25,
    deliveryTimeMaxMinutes: 40,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/6-placeres-vinos-y-algo-mas.jpg',
    discount: 50,
    geo: {
      lat: -32.9296144,
      lng: -60.6849547,
    },
    categories: [
      {
        id: 9,
        nameES: 'Pastas',
        nameEN: 'Pasta',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/9-Pastas.png',
      },
      {
        id: 6,
        nameES: 'Vinos',
        nameEN: 'Wines',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/6-Vinos.png',
      },
    ],
  },
  {
    id: 7,
    name: 'El Club de la Milanesa',
    rating: 4,
    deliveryTimeMinMinutes: 20,
    deliveryTimeMaxMinutes: 30,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/7-el-club-de-la-milanesa.jpg',
    discount: 20,
    geo: {
      lat: -32.9296144,
      lng: -60.6920787,
    },
    categories: [
      {
        id: 2,
        nameES: 'Milanesas',
        nameEN: 'Milanese',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/2-Milanesas.jpg',
      },
      {
        id: 1,
        nameES: 'Hamburguesas',
        nameEN: 'Burgers',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/1-Burgers.jpg',
      },
    ],
  },
  {
    id: 8,
    name: 'Marbet Helados Gourmet',
    rating: 4.5,
    deliveryTimeMinMinutes: 15,
    deliveryTimeMaxMinutes: 25,
    logoURL:
      'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/restaurants/8-marbet-helados-gourmet.jpg',
    discount: 10,
    geo: {
      lat: -32.930659,
      lng: -60.7007905,
    },
    categories: [
      {
        id: 5,
        nameES: 'Helados',
        nameEN: 'Ice creams',
        imageURL:
          'https://tenpo-app-challenge.s3.us-east-2.amazonaws.com/images/categories/5-Helados.jpg',
      },
    ],
  },
];

export default restaurants;
