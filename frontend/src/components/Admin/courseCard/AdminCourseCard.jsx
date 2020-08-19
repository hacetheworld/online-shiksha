import React from "react";
import "./AdminCourseCard.scss";

// React Router
import { Link } from "react-router-dom";
//Import ReactPlayer Componets
import ReactPlayer from "react-player/lazy";

//Import Reactstrap Components
import { Container, Row, Col, Button } from "reactstrap";
export default function AdminCourseCard() {
  return (
    <Col className="col-12 col-md-12 col-lg-6">
      {" "}
      <div className="course-card ">
        <div className="player-wrapper course-card-preview-video">
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            className="react-player "
            url="https://vimeo.com/169599296"
          />
        </div>
        <div className="course-card-course-title ">
          Complete Data Structure and algorithms course-2020
        </div>
        <div className="course-card-watchnowbutton">
          <Button className="rounded-0 button-big bg-default text-white">
            <Link className="text-white" to="/admin/course/123">
              Watch Course &nbsp;
              <i className="fa fa-arrow-right"></i>
            </Link>
          </Button>
        </div>
      </div>
    </Col>
  );
}
