const initialState = {
  covidData: {},
  loading: false,
};

export const coivdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, covidData: action.payload };
  }
  return state;
};
