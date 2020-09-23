import { RECEIVE_DATA } from "../actions/shared";

const LoadingReducer = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
