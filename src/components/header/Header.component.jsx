import React from "react";
import "./Header.style.scss";
import { Link, withRouter } from "react-router-dom";

// use Redux
import { connect } from "react-redux";
import { userLoggedIn, userLoggedOUT } from "../../redux/actions/user.actions";
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
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.props;

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
            <UncontrolledCollapse toggler="#navbar_global" navbar>
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
                    <span className="header--link text-white">Courses</span>
                  </Link>
                </NavItem>
              </Nav>
              <Nav
                className="ml-auto navbar-nav-hover align-items-lg-center"
                navbar
              >
                {isLoggedIn === false ? (
                  <>
                    <NavItem>
                      <Link
                        to="/register"
                        className=" bg-danger button-outline text-white"
                      >
                        <Button color="danger" size="lg" type="button">
                          Register
                        </Button>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link
                        to="/signin"
                        className=" bg-danger button-outline text-white"
                      >
                        <Button color="danger" size="lg" type="button">
                          SignIn
                        </Button>
                      </Link>
                    </NavItem>
                  </>
                ) : (
                  <NavItem>
                    <Link
                      to="/dashboard"
                      className=" bg-danger button-outline text-white"
                    >
                      <Button color="danger" size="lg" type="button">
                        Go To DashBoard
                      </Button>
                    </Link>
                  </NavItem>
                )}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  username: user.user.username,
  isLoggedIn: user.user.isLoggedIn,
});
export default connect(mapStateToProps, { userLoggedIn, userLoggedOUT })(
  withRouter(Header)
);
