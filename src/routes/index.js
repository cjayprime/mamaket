import React, { lazy, Component, Suspense } from "react";
import { CircularProgress } from '@material-ui/core';
import { observer, useObserver } from 'mobx-react';
import { BrowserRouter , Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import BaseRoutes from "./base";

import Store from "../store";

import { PrivateRoutes } from "../components";

const style = {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100%',
};

const style404 = {
    alignItems: "center",
    display: "flex",
    fontSize: 200,
    height: "100vh",
    justifyContent: "center",
    width: "100vw",
};

class Routes extends Component {
    component = route => observer(route.component);

    render() {
        return (
            <Suspense fallback={<div style={style}><CircularProgress /></div>}>
                <BrowserRouter history={createBrowserHistory()}>
                    <Switch>
                        {
                            BaseRoutes.public.map(route => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={this.component(route)}
                                />
                            ))
                        }
                        {
                            BaseRoutes.private.map(route => (
                                <PrivateRoutes
                                    account={Store}
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
                                <div style={style404}>
                                    404
                                </div>
                            )}
                        />
                        <Route path="/">
                            <Redirect to={Store.account.storage.get() ? "/" : "/signin"} />
                        </Route>
                    </Switch>
                </BrowserRouter >
            </Suspense>
        );
    }
}

export default Routes;
