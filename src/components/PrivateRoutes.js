import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = _props => (
    <Route
        component={props => {
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

export default PrivateRoutes;
