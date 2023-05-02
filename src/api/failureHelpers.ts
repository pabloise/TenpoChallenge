const array = [
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

export const shuffle = (): boolean[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getIsRestaurantURL = (url?: string): boolean =>
  url === 'https://tenpo-app.free.beeceptor.com/restaurants';
