import React from "react";

// React Router Component
import { Switch, Route } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader.component";
import AdminCoursesPage from "./Course/AdminCoursesPage";
import WatchCourse from "./WatchCourse/WatchCourse.component";

// Reusable Custom Component
class AdminView extends React.Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <Switch>
          <Route exact path="/admin" component={AdminCoursesPage} />
          <Route
            exact
            path="/admin/course/:course_id"
            component={WatchCourse}
          />
        </Switch>
      </div>
    );
  }
}

export default AdminView;
