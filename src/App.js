import React from "react";
import "./App.scss";

//Redux
import { connect } from "react-redux";
import { userLoggedIn, userLoggedOUT } from "./redux/actions/user.actions";
// React Router Component
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Frontend component
import FrontView from "./pages/frontend/frontend";
import AdminView from "./pages/admin/admin";
import ProtectedRoute from "./protectedRoute/ProtectedRoute.component";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const jsonToken = localStorage.getItem("token");
    if (jsonToken !== null) {
      fetch("/api/current_user/", {
        headers: {
          Authorization: `JWT ${jsonToken}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.props.userLoggedIn({
            username: json.username,
            isLoggedIn: true,
          });
          this.props.history.push("/dashboard");
        });
    } else {
      this.props.userLoggedOUT({
        username: "",
        isLoggedIn: false,
      });
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/dashboard" component={AdminView} />
        <Route path="/" component={FrontView} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.user.isLoggedIn,
});
export default connect(mapStateToProps, { userLoggedIn, userLoggedOUT })(
  withRouter(App)
);
