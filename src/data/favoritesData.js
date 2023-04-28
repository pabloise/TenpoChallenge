import McFoodImage from '../assets/McDonaldsFavourite.png';
import McDonalds from '../assets/McDonalds.png';
import MeltFoodImage from '../assets/MeltFavourite.png';
import Melt from '../assets/Melt.png';

const favoritesData = [
  {
    restaurantName: `Mc Donald's`,
    favorite: 'Combo hamburguesa Bigmac',
    rating: 3.5,
    delayMin: 10,
    delayMax: 50,
    foodImage: McFoodImage,
    restaurantImage: McDonalds,
  },
  {
    restaurantName: 'Melt',
    favorite: 'Pizza Mediana Melt',
    rating: 3.5,
    delayMin: 10,
    delayMax: 50,
    foodImage: MeltFoodImage,
    restaurantImage: Melt,
  },
];

export default favoritesData;
