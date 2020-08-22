import React from "react";
import { Link } from "react-router-dom";
import "./WhyEducation.style.scss";
//Import ReactPlayer Componets
import ReactPlayer from "react-player/lazy";

//Import Reactstrap Components
import { Container, Row, Col, Button } from "reactstrap";
export default function WhyEducation() {
  return (
    <div className="whyeduaction-section py-lg">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6" className="col-md-5 col-sm-5">
            <div className="WhyEducation-left">
              <h3>
                Why e- Learning Is <span className="text-danger">Awesome</span>
              </h3>
              <div className="WhyEducation-left--features">
                <p>
                  <i className="fa fa-check-square-o"></i> You don't have to go
                  to college
                </p>
                <p>
                  <i className="fa fa-check-square-o"></i> You decide your own
                  study Time
                </p>
                <p>
                  <i className="fa fa-check-square-o"></i> You can do lot more
                  in less Time.
                </p>
                <p>
                  <i className="fa fa-check-square-o"></i> You don't have to go
                  to college
                </p>
              </div>
              <Link to="/courses">
                <Button className="btn btn-danger rounded-0">
                  Go to courses <i className="fa fa-arrow-right"></i>
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg="6" className=" col-md-5 col-sm-4">
            <div className="WhyEducation-right d-flex justify-content-center align-items-center">
              <ReactPlayer
                controls={true}
                className=""
                playIcon="<i class='fa fa-play-circle-o'><i/>"
                url="https://vimeo.com/169599296"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
