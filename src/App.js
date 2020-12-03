import React from "react";
import "./App.css";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage, ProjectsPage, HomePage } from "./components/index";

function App() {
  return (
    <div className="App">
      <video autoplay muted loop id="myVideo">
        <source src="./videos/video.mp4" type="video/mp4" />
      </video>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
