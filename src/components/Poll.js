import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVoteKeys, getTextKeys, getPercentage } from "../utils/helpers";
import { handlePollSubmission } from "../actions/polls";
import { useParams } from "react-router";

const Poll = () => {
  const dispatch = useDispatch();
  const pollID = useParams().id;
  const poll = useSelector((state) => state.pollReducer[pollID]);
  const users = useSelector((state) => state.userReducer);

  const userImg = users[poll.author].avatarURL;

  const voteArr = getVoteKeys();

  const vote = voteArr.reduce((vote, key) => {
    console.log(vote, key);
    if (poll[key].includes("tylermcginnis")) {
      return key[0];
    }

    return vote === null ? null : vote;
  }, null);

  const totalScore = voteArr.reduce((totalVote, vote) => {
    return totalVote + poll[vote].length;
  }, 0);

  const handleAnswered = (newUserAnswer) => {
    dispatch(handlePollSubmission(newUserAnswer));
  };

  const PollItem = ({ poll }) => {
    return getTextKeys().map((key, index) => {
      const letterScore = poll[voteArr[index]].length;

      const percentageScore = `${getPercentage(letterScore, totalScore)}%`;
      return (
        <li
          key={index}
          onClick={() =>
            handleAnswered({
              authedUser: "tylermcginnis",
              id: poll.id,
              answer: key.slice(0, 1),
            })
          }
        >
          <span>{poll[key]}</span>
          <span>
            {vote === null ? null : (
              <div className="result">
                {percentageScore} ({letterScore})
              </div>
            )}
          </span>
        </li>
      );
    });
  };

  return (
    <div className="poll-container">
      <h1>{poll.question}</h1>
      <div className="poll-author">
        By <img className="user" src={userImg} alt={poll.author} />
      </div>
      <div>
        <ul>
          <PollItem poll={poll} />
        </ul>
      </div>
    </div>
  );
};

export default Poll;
