export const changeHistoryData = (data) => {
  const newData = data.map((item) => ({
    x: new Date(item[0]),
    y: [
      parseFloat(item[1]), // candle opening price.
      parseFloat(item[2]), // highest price during the candle period.
      parseFloat(item[3]), // lowest price for the candle period.
      parseFloat(item[4]), // closing price of the candle.
    ],
  }));

  return newData;
};

const getRandom = ({ min, max, decimalPlaces = 0 }) => {
  const randomNumber = Math.random() * (max - min) + min;
  return parseFloat(randomNumber.toFixed(decimalPlaces));
};

export const createRandomOrder = (price) => {
  const order = {
    count: getRandom({ min: 0.01, max: 2, decimalPlaces: 4 }),
    price: getRandom({
      min: price * 0.999,
      max: price,
      decimalPlaces: 1,
    }),
    date: Date.now() - 1000,
    isSelling: !!getRandom({ min: 0, max: 1 }),
  };

  return order;
};
