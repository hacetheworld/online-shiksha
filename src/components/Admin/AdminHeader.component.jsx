import React from "react";

import { Link, withRouter } from "react-router-dom";

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
import { userLoggedIn, userLoggedOUT } from "../../redux/actions/user.actions";

class AdminHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const jsonToken = localStorage.getItem("token");
    if (jsonToken !== null) {
      fetch("/api/current_user/", {
        headers: {
          Authorization: `JWT ${jsonToken}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.props.userLoggedIn({
            username: json.username,
            isLoggedIn: true,
          });
        });
    } else {
      this.props.userLoggedOUT({
        username: "",
        isLoggedIn: false,
      });
      this.props.history.push("/");
    }
  }
  handle_logout = () => {
    localStorage.removeItem("token");
    this.props.userLoggedOUT({ username: "", isLoggedIn: false });
  };
  render() {
    const { username } = this.props;
    console.log(this.props);

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
                  <span className="text-white">
                    Welcome{" "}
                    <span className="bage badge-danger"> {username}</span>
                  </span>
                </NavItem>
                <NavItem>
                  <button
                    className=" btn-lg border-0 bg-danger"
                    onClick={() => {
                      this.handle_logout();
                      this.props.history.push("/");
                    }}
                  >
                    Logout
                  </button>
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

export default connect(mapStateToProps, { userLoggedIn, userLoggedOUT })(
  withRouter(AdminHeader)
);
