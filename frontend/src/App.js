import React from "react";
import "./App.scss";

// React Router Component
import { Switch, Route } from "react-router-dom";

// Frontend component
import FrontView from "./pages/frontend/frontend";
import AdminView from "./pages/admin/admin";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/admin" component={AdminView} />
        <Route path="/" component={FrontView} />
      </Switch>
    );
  }
}

export default App;
