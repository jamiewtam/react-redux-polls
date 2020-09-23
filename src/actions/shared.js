import { getInitialData } from "../utils/api";

export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = (users, polls) => {
  return {
    type: RECEIVE_DATA,
    users,
    polls,
  };
};

export const handleInitialData = () => {
  return (dispatch) => {
    getInitialData().then(({ users, polls }) => {
      dispatch(receiveData(users, polls));
    });
  };
};
