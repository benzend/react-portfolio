import React, { useEffect, useState } from "react";
import "./App.css";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Blog } from "./pages/Blog";

export const App = () => {
  const [yoffset, setYoffset] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYoffset(window.pageYOffset);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage yoffset={yoffset} />} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
};
