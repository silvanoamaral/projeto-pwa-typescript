import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));

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
