import React from "react";
import "./Hero.style.scss";
import { Container, Row, Col, Button } from "reactstrap";
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
              <Button
                className="btn-icon btn rounded-0"
                color="primary"
                type="button"
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-atom" />
                </span>
                &nbsp; Go To Course
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
