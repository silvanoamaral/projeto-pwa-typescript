import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
