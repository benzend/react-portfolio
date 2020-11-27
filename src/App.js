import React from "react";
import "./App.css";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AboutPage,
  ProjectsPage,
  ContactPage,
  HomePage,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
