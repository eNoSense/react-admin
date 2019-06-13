import React, { Component } from "react";
import "./index.less";

export default class NoMatch extends Component {
  render() {
    return (
      <div className="page-NoMatch">
        Ops, You have visited the page not exist!
      </div>
    );
  }
}
