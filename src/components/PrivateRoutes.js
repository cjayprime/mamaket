import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import Store from '../store';

const PrivateRoutes = props => {
    useEffect(() => {
        Store.account.user.current();
    });
    return (
        <Route
            {...props}
            component={componentProps => {
                const content = Store.account.storage.get('TOKEN') ? (
                    <props.component {...componentProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: componentProps.location },
                        }}
                    />
                );
                return content;
            }}
        />
    );
}

export default PrivateRoutes;
