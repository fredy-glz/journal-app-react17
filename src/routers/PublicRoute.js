import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            component={(props) => 
                !isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute
