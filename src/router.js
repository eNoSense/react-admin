import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "./app";
import Login from "./pages/login";
import NoMatch from "./pages/404";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Spins from "./pages/ui/spins";
import Notifications from "./pages/ui/notifications";
import Messages from "./pages/ui/messages";
import Tabs from "./pages/ui/tabs";

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
                <Switch>
                  <Route path="/admin/ui/tabs" component={Tabs} />
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route path="/admin/ui/notifications" component={Notifications} />
                  <Route path="/admin/ui/spins" component={Spins} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
        </App>
      </Router>
    );
  }
}
