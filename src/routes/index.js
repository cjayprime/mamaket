import React, { Component } from "react";
import { observer } from 'mobx-react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes from "./routes";

import store from "../store";

import PrivateRoutes from "../components/PrivateRoutes";

export default
  class Routes extends Component {
    component = (route) =>
        observer((props) => <route.component {...props} store={store} />);

    render() {
      return (
        <Router history={createBrowserHistory()}>
          <Switch>
            {
                routes.public.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={this.component(route)}
                    />
                ))
            }
            {
                routes.private.map((route) => (
                    <PrivateRoutes
                        account={store}
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={this.component(route)}
                    />
                ))
            }
            <Route
              path="/404"
              component={() => (
                <div
                  style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 200,
                  }}
                >
                  404
                </div>
              )}
            />
            <Route exact path="/">
              <Redirect to={store.account.storage.get() ? "/" : "/signin"} />
            </Route>
          </Switch>
        </Router>
      );
    }
}
