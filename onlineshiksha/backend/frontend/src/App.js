import React from "react";
import "./App.scss";

//Redux
import { connect } from "react-redux";
import { userLoggedIn } from "./redux/actions/user.actions";
// React Router Component
import { Switch, Route, Redirect } from "react-router-dom";

// Frontend component
import FrontView from "./pages/frontend/frontend";
import AdminView from "./pages/admin/admin";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const jsonToken = localStorage.getItem("token");
    console.log(jsonToken);

    if (jsonToken) {
      fetch("http://localhost:8000/api/current_user/", {
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
        });
    }
  }
  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {isLoggedIn === true ? (
          <Route path="/admin" render={() => <AdminView />} />
        ) : null}
        <Route path="/" render={() => <FrontView />} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.user.isLoggedIn,
});
export default connect(mapStateToProps, { userLoggedIn })(App);
