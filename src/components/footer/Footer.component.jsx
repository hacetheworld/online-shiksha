import React from "react";

// Import React Router Dom
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className=" footer">
      <Container>
        <Row className=" row-grid align-items-center mb-5">
          <Col lg="6">
            <h3 className=" text-primary font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
            <h4 className=" mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon-only rounded-circle"
              color="twitter"
              href="https://www.linkedin.com/in/ajay-meena1/"
              id="tooltip475038074"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-linkedin" />
              </span>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip475038074">
              Follow us
            </UncontrolledTooltip>

            <Button
              className="btn-icon-only rounded-circle ml-1"
              color="github"
              href="https://github.com/hacetheworld"
              id="tooltip495507257"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-github" />
              </span>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip495507257">
              Star on Github
            </UncontrolledTooltip>
          </Col>
        </Row>
        <hr />
        <Row className=" align-items-center justify-content-md-between">
          <Col md="6">
            <div className=" copyright">
              © {new Date().getFullYear()} <a href="/">Ajay Meena</a>.
            </div>
          </Col>
          <Col md="6">
            <Nav className=" nav-footer justify-content-end">
              <NavItem>
                <Link to="/">Ajay Meena</Link>
              </NavItem>
              <NavItem>
                <Link to="/courses">Courses</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Legal</Link>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
