import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./about";
import Topic from "./topic";
import Main from "./main";
import Home from "./home";

export default class IRouter extends Component {
  render() {
    <Router>
      <Home>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
      </Home>
    </Router>
  }
}
