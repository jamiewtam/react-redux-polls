import { RECEIVE_DATA } from "../actions/shared";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return {
        ...state,
      };
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
};

export default userReducer;
