import React from "react";
import "./App.scss";

//Redux
import { store } from "./redux/store";
import { connect } from "react-redux";
import { userLoggedIn, userLoggedOUT } from "./redux/actions/user.actions";
// React Router Component
import { Switch, Route, withRouter } from "react-router-dom";

// Frontend component
import FrontView from "./pages/frontend/frontend";
import AdminView from "./pages/admin/admin";

// Authenticate
// logged out after 1 day
setInterval(() => {
  store.dispatch(
    userLoggedOUT({
      username: "",
      isLoggedIn: false,
    })
  );
}, 86400000);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const jsonToken = localStorage.getItem("token");
    if (jsonToken !== null && jsonToken !== undefined) {
      fetch("/api/current_user/", {
        headers: {
          Authorization: `JWT ${jsonToken}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.username !== undefined) {
            this.props.userLoggedIn({
              username: json.username,
              isLoggedIn: true,
            });
            this.props.history.push("/dashboard");
          } else {
            throw new Error("Session exipred");
          }
        })
        .catch((e) => {
          this.props.userLoggedOUT({
            username: "",
            isLoggedIn: false,
          });
        });
    } else {
      this.props.userLoggedOUT({
        username: "",
        isLoggedIn: false,
      });
    }
  }
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={AdminView} />
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
