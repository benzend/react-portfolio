import React, { useState, useEffect } from "react";
import "./App.css";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src="./videos/inkvideo.mp4" type="video/mp4" />
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
