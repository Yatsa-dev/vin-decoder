const getCarInfo = (state) => state.car.entities;
const isLoading = (state) => state.car.isLoading;

const carsSelectors = {
  getCarInfo,
  isLoading,
};

export default carsSelectors;
