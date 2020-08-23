import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = (props) => {
  const {
    componentToRedirect,
    isLoggedIn,
    component: Component,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: componentToRedirect,
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.user.isLoggedIn,
});
export default connect(mapStateToProps)(ProtectedRoute);
