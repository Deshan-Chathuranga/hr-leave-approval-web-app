import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const GaurdedRoute = ({component, auth, ...rest}) => { //coreUI //tim kit
    const token = localStorage.getItem('token');
    
    return (<Route {...rest} render={(props) => (
        (token === '' || token == null) ? <component {...props} /> : <Redirect to="/login" />
    )} />)
    // (token === '' || token == null)
    //     return (
    //         <Redirect to="/login" />
    //     )

    // return  (
    //     <Route path={path} component={component} />
    // )
}