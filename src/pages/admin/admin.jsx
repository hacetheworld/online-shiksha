import React from "react";

// React Router Component
import { Switch, Route } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader.component";
import AdminCoursesPage from "./Course/AdminCoursesPage";
import WatchCourse from "./WatchCourse/WatchCourse.component";
import NotFoundPage from "../404page/404Page";
import ProtectedRoute from "../../protectedRoute/ProtectedRoute.component";

// Reusable Custom Component
class AdminView extends React.Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <Switch>
          <ProtectedRoute
            exact
            path="/dashboard/course/:course_id"
            component={WatchCourse}
            componentToRedirect="/signin"
          />
          <ProtectedRoute
            exact
            path="/dashboard"
            component={AdminCoursesPage}
            componentToRedirect="/signin"
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default AdminView;
