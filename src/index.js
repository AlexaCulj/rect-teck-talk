import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/home";
import { Navigation } from "./components/navigation";
import { UsersContainer as Users } from "./components/users";

import store from "./store";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </div>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
