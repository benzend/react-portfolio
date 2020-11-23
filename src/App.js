import React from "react";
import "./App.css";
import "fontsource-roboto";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

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
