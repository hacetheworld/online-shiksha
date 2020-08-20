import React from "react";

import { Link } from "react-router-dom";

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
import { connect } from "react-redux";
import { userLoggedOUT } from "../../redux/actions/user.actions";

class AdminHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  handle_logout = () => {
    console.log(this.props);
    localStorage.removeItem("token");
    this.props.userLoggedOUT();
  };
  render() {
    const { username } = this.props;
    return (
      <>
        {/* Navbar primary */}
        <Navbar
          className="navbar-horizontal navbar-dark bg-primary"
          expand="lg"
        >
          <Container>
            <NavbarBrand>
              <Link to="/admin" className="text-white">
                Admin
              </Link>
            </NavbarBrand>
            <button
              aria-controls="navbar-primary"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("../../assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                {/* <NavItem>
                  <NavLink>
                    <Link to="/admin/course" className="text-white ">
                      My Courses
                    </Link>
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink>
                    <span className="text-white">
                      Welcome{" "}
                      <span className="bage badge-danger"> {username}</span>
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="badge badge-danger button-big"
                    onClick={this.handle_logout}
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.user.username,
});

export default connect(mapStateToProps, { userLoggedOUT })(AdminHeader);
