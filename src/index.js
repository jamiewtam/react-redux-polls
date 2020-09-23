import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers/";
import App from "./components/App";
import "./index.css";

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className="border-container">
        <li className="border-item" style={{ background: "var(--red)" }} />
        <li className="border-item" style={{ background: "var(--blue)" }} />
        <li className="border-item" style={{ background: "var(--pink)" }} />
        <li className="border-item" style={{ background: "var(--yellow)" }} />
        <li className="border-item" style={{ background: "var(--aqua)" }} />
      </ul>
    </React.Fragment>
  );
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.Fragment>
    <ColorfulBorder />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
