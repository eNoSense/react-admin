import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import About from "./about";
import Topic from "./topic";
import Main from "./main";
// import "./index.less";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
        </ul>
        <hr/>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
      </HashRouter>
    );
  }
}
