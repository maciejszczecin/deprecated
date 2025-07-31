const initialState = {
  value: 0,
};

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NUMBER_VALUE':
      return {
        ...state,
        value: action.payload,
      };
    case 'RESET_NUMBER_VALUE':
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

export default numberReducer;