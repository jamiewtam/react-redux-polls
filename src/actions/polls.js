import { savePollAnswer, savePoll } from "../utils/api";

export const ADD_POLL = "ADD_POLL";
export const NEW_POLL_ANSWER = "NEW_POLL_ANSWER";

const pollCreation = (poll) => {
  return {
    type: ADD_POLL,
    poll,
  };
};

const submitPoll = ({ authedUser, id, answer }) => {
  return {
    type: NEW_POLL_ANSWER,
    authedUser,
    id,
    answer,
  };
};

export const handlePollSubmission = (newPollAnswer) => {
  return (dispatch) => {
    savePollAnswer(newPollAnswer).then(() => {
      dispatch(submitPoll(newPollAnswer));
    });
  };
};

export const handlePollCreation = (poll) => {
  return (dispatch) => {
    savePoll(poll).then((poll) => {
      dispatch(pollCreation(poll));
    });
  };
};
