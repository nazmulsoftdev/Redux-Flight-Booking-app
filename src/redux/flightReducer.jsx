import { ADDNEWITEM, DELETEITEM } from "./action";

// initial state
const initialState = [];

// create reducer

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDNEWITEM:
      let requestState = action.paylod;
      return state.concat(requestState);

    case DELETEITEM:
      return state.filter((item) => item !== action.paylod);

    default:
      return state;
  }
};

export default flightReducer;
