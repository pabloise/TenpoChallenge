import McDonaldsImage from '../assets/McDonalds.png';
import PapaJohnsImage from '../assets/PapaJohns.png';
import YokonoImage from '../assets/Yokono.png';
import MeltImage from '../assets/Melt.png';

const restaurantsData = [
  {
    id: 1,
    name: `Mc Donald's`,
    image: McDonaldsImage,
    raiting: 4.5,
    delayMin: 10,
    delayMax: 50,
    discount: 50,
    categories: [1, 2],
  },
  {
    id: 2,
    name: `Papa John's`,
    image: PapaJohnsImage,
    raiting: 4.5,
    delayMin: 10,
    delayMax: 50,
    discount: 50,
    categories: [1, 2],
  },
  {
    id: 3,
    name: 'Melt',
    image: MeltImage,
    raiting: 4.5,
    delayMin: 10,
    delayMax: 50,
    discount: 50,
    categories: [1, 2],
  },
  {
    id: 4,
    name: 'Yokono',
    image: YokonoImage,
    raiting: 4.5,
    delayMin: 10,
    delayMax: 50,
    discount: 50,
    categories: [1, 2],
  },
];

export default restaurantsData;
