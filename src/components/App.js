import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";

const Home = React.lazy(() => {
  return import("./Home");
});

const Leaderboard = React.lazy(() => {
  return import("./Leaderboard");
});

const AddPolls = React.lazy(() => {
  return import("./AddPolls");
});

const Poll = React.lazy(() => {
  return import("./Poll");
});

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => {
    return state.loadingReducer;
  });

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Router>
        <div className="container">
          <Nav />
          <h1>Loading...</h1>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="container">
        <Nav />
        <React.Suspense fallback={<h1>Loading</h1>}>
          <Route exact path="/" component={Home} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/addPolls" component={AddPolls} />
          <Route path="/polls/:id" component={Poll} />
        </React.Suspense>
      </div>
    </Router>
  );
}
