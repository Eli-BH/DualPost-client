import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
