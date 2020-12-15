import React from "react";
import "./App.css";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BlogMainNavigation } from "./pages/BlogMainNavigation";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={BlogMainNavigation} />
        </Switch>
      </Router>
    </div>
  );
};
