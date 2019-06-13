import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./app";
import Login from "./pages/login";
import NoMatch from "./pages/404";
import Admin from "./admin";
import Button from "./pages/ui/buttons";

export default class IRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            component={() => (
              <Admin>
                <Route path="/admin/ui/buttons" component={Button} />
                <Route component={NoMatch} />
              </Admin>
            )}
          />
        </App>
      </Router>
    );
  }
}
