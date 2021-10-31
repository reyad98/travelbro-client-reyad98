import React from 'react';
import { Route, Redirect } from 'react-router';
import useFirebase from '../../hooks/usefirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useFirebase();

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};   

export default PrivateRoute;