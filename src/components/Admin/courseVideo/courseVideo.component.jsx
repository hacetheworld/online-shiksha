import React from "react";
import "./courseVideo.scss";
// import { Link } from "react-router-dom";
// import { Container, Row } from "reactstrap";
import ReactPlayer from "react-player/lazy";
export default function CourseVideoContent(props) {
  // const { course_id } = props;
  return (
    <div className="course-content mt-lg">
      <div className="player-wrapper course-card-preview-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls={true}
          className="react-player "
          url="https://www.youtube.com/watch?v=riGtbrlCdxs"
        />
      </div>
    </div>
  );
}
