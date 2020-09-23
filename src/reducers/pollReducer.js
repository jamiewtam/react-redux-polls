import { RECEIVE_DATA } from "../actions/shared";
import { ADD_POLL, NEW_POLL_ANSWER } from "../actions/polls";

const pollReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.polls;
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    case NEW_POLL_ANSWER:
      const { answer, id, authedUser } = action;
      const poll = state[id];
      const votesKey = answer + "Votes";

      return {
        ...state,
        [action.id]: {
          ...poll,
          [votesKey]: poll[votesKey].concat([authedUser]),
        },
      };
    default:
      return state;
  }
};

export default pollReducer;
