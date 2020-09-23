import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const [menu, setMenu] = React.useState("unanswered");

  const changePolls = () => {
    setMenu((prevMenu) => {
      if (prevMenu === "unanswered") {
        return "answered";
      } else {
        return "unanswered";
      }
    });
  };

  // Get Posts from Redux

  const polls = useSelector((state) => {
    return state.pollReducer;
  });

  const pollsArr = Object.values(polls);

  // Go through each poll answer. If tylermcginnis is on it add to either unanswered or answered polls

  const unansweredPollArr = [];
  const answeredPollArr = [];

  pollsArr.forEach((poll) => {
    if (
      poll["aVotes"].includes("tylermcginnis") ||
      poll["bVotes"].includes("tylermcginnis") ||
      poll["cVotes"].includes("tylermcginnis") ||
      poll["dVotes"].includes("tylermcginnis")
    ) {
      answeredPollArr.push(poll);
    } else {
      unansweredPollArr.push(poll);
    }
  });

  let Polls;
  if (menu === "unanswered") {
    Polls = unansweredPollArr.map((poll) => {
      return (
        <li key={poll.id}>
          <Link to={`/polls/${poll.id}`}>{poll.question}</Link>
        </li>
      );
    });
  } else {
    Polls = answeredPollArr.map((poll) => {
      return (
        <li key={poll.id}>
          <Link to={`/polls/${poll.id}`}>{poll.question}</Link>
        </li>
      );
    });
  }

  return (
    <div>
      <button onClick={changePolls}>Unanswered</button>
      <button onClick={changePolls}>Answered</button>
      {Polls}
    </div>
  );
};

export default Home;
