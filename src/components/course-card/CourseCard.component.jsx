import React from "react";
import "./CourseCard.style.scss";

// React Router
import { Link, withRouter } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/course.action";
//Import ReactPlayer Componets
import ReactPlayer from "react-player/lazy";

//Import Reactstrap Components
import { Row, Col, Button } from "reactstrap";
function CourseCard(props) {
  const { courseName, price, course_ID, features } = props.course;
  let course = { course_ID, courseName, price };
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
          <Link to={`course/${course_ID}`}>{courseName}</Link>
        </div>
        <div className="course-card-course-content">
          <Row>
            <Col>
              {features.map((feature, id) => (
                <p key={id}>
                  <i className="fa fa-check-square-o"></i> {feature}
                </p>
              ))}
            </Col>
          </Row>
          <div className="course-card-buynowbutton">
            <Button
              className="rounded-0 button-big bg-default text-white"
              onClick={() => {
                props.addToCart(course);
                props.history.push("/checkout");
              }}
            >
              <Link className="text-white">
                Buy Now{" "}
                <span className="text-danger course-price">{price} $</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default connect(null, { addToCart })(withRouter(CourseCard));
