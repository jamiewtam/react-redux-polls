import React from "react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const users = useSelector((state) => {
    return state.userReducer;
  });

  const userArr = Object.values(users);

  const userList = userArr.map((user) => {
    return (
      <li key={user.id}>
        <img src={user.avatarURL} alt={user.name} />
        <h1>{user.name}</h1>
        <p>{user.polls.length} Polls</p>
        <p>{user.answers.length} Answers</p>
      </li>
    );
  });
  return (
    <div>
      <ul>{userList}</ul>
    </div>
  );
};

export default Leaderboard;
