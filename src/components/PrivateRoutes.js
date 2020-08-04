import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends Component {
    render() {
        const _props = this.props;
        return (
        <Route
            component={(props) => {
            const content = _props.account.storage.get() ? (
                <this.props.component {...props} />
            ) : (
                <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: props.location },
                }}
                />
            );
            return content;
            }}
        />
        );
    }
}
