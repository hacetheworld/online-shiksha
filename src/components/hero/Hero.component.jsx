import React from "react";
import { Link } from "react-router-dom";
import "./Hero.style.scss";
import { Container, Row, Button } from "reactstrap";
export default function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <div className="hero d-flex flex-column justify-content-center align-items-center ">
            <h1 className="lead h1 hero-text text-wrap">
              A beautiful Design System for Bootstrap 4. It's Free and Open
              Source.
            </h1>
            <div className="hero-btn">
              <Link
                to="/courses"
                className=" bg-danger button-outline text-white"
              >
                <Button
                  className="btn-icon btn rounded-0"
                  color="danger"
                  size="lg"
                  type="button"
                >
                  <span className="btn-inner--icon">
                    <i className="ni ni-atom" />
                  </span>
                  &nbsp; Go To Course
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
