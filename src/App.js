import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { default as Plashscreen } from "./PlashScreen/PlashScreen";
import { default as Camera } from "./Camera/Camera";
import { default as Colordata } from "./Colordata/Colordata";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Plashscreen />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/colordata">
            <Colordata />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
