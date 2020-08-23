import React from "react";
import "./courseVideo.scss";
import { connect } from "react-redux";
import ReactPlayer from "react-player/lazy";

function CourseVideoContent(props) {
  const { CURRENT_VIDEO } = props;
  return (
    <div className="course-content mt-lg">
      <p>{CURRENT_VIDEO.title}</p>
      <div className="player-wrapper course-card-preview-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls={true}
          className="react-player "
          url={CURRENT_VIDEO.url}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  CURRENT_VIDEO: state.courses.CURRENT_VIDEO,
});

export default connect(mapStateToProps)(CourseVideoContent);
