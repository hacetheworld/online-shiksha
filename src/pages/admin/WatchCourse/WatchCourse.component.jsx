import React from "react";
import "./WatchCourse.style.scss";
import Sidebar from "../../../components/Admin/CourseSidebar/Sidebar.component";
import CourseVideoContent from "../../../components/Admin/courseVideo/courseVideo.component";
import { connect } from "react-redux";
import { getCurrentCourse } from "../../../utils/util";
function WatchCourse(props) {
  const { courses } = props;
  const course_id = parseInt(props.match.params["course_id"]);
  const current_course = getCurrentCourse(courses, course_id);
  return (
    <section className="watch-course">
      <div className="sidebar-wrapper">
        <Sidebar current_course={current_course} />
      </div>
      <div className="main-video">
        <CourseVideoContent />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  courses: state.courses.COURSES_SET,
});

export default connect(mapStateToProps)(WatchCourse);
