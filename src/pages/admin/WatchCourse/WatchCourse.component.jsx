import React from "react";
import "./WatchCourse.style.scss";
import Sidebar from "../../../components/Admin/CourseSidebar/Sidebar.component";
import CourseVideoContent from "../../../components/Admin/courseVideo/courseVideo.component";

export default function WatchCourse(props) {
  const { match } = props;
  const course_id = match.params["course_id"];
  return (
    <section className="watch-course">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="main-video">
        <CourseVideoContent course_id={course_id} />
      </div>
    </section>
  );
}
