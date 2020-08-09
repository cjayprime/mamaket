import React, { Component, Suspense } from "react";
import { CircularProgress } from '@material-ui/core';
import { observer } from 'mobx-react';
import { BrowserRouter , Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes from "./routes";

import store from "../store";

import { PrivateRoutes } from "../components";

export default
  class Routes extends Component {
    component = (route) =>
        observer((props) => <route.component {...props} store={store} />);

    render() {
      return (
        <Suspense fallback={<div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><CircularProgress /></div>}>
          <BrowserRouter history={createBrowserHistory()}>
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
              <Route path="/">
                <Redirect to={store.account.storage.get() ? "/" : "/signin"} />
              </Route>
            </Switch>
          </BrowserRouter >
        </Suspense>
      );
    }
}
