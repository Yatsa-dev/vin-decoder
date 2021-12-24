const getVariableById = (state) => state.variable.entity;
const isLoading = (state) => state.variable.isLoading;
const getError = (state) => state.variable.error;

const variableSelectors = {
  getVariableById,
  isLoading,
  getError,
};

export default variableSelectors;
