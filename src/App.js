import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/home'
import About from './pages/about'
import Portfolio from "./pages/portfolio";
import Project from "./pages/project";

import Header from './components/header'

import './styles/font.css'
import './styles/app.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/fe-portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App