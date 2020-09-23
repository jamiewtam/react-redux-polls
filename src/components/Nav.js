import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/addPolls">Add Poll</Link>
    </div>
  );
};

export default Nav;
