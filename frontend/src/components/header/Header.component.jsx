import React from "react";
import "./Header.style.scss";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Header extends React.Component {
  state = {
    isUserLoggedIn: false,
  };

  // onExiting = () => {
  //   this.setState({
  //     collapseClasses: "collapsing-out",
  //   });
  // };

  // onExited = () => {
  //   this.setState({
  //     collapseClasses: "",
  //   });
  // };

  render() {
    return (
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-dark bg-primary"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("../../assets/img/brand/argon-react-white.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={this.state.collapseClasses}
              // onExiting={this.onExiting}
              // onExited={this.onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("../../assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav
                className="navbar-nav-hover align-items-lg-center ml-auto"
                navbar
              >
                <NavItem>
                  <Link to="/courses">
                    <NavLink>
                      <span className="header--link">Courses</span>
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
              <Nav
                className="ml-auto navbar-nav-hover align-items-lg-center"
                navbar
              >
                <NavItem>
                  <Link to="/register">
                    <NavLink className="badge badge-danger">Register</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <NavLink className="badge badge-danger">Login</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
