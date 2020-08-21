import React from "react";

// React Router Component
import { Switch, Route } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader.component";
import AdminCoursesPage from "./Course/AdminCoursesPage";
import WatchCourse from "./WatchCourse/WatchCourse.component";
import NotFoundPage from "../404page/404Page";

// Reusable Custom Component
class AdminView extends React.Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <Switch>
          <Route exact path="/dashboard" component={AdminCoursesPage} />
          <Route
            exact
            path="/dashboard/course/:course_id"
            component={WatchCourse}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default AdminView;
