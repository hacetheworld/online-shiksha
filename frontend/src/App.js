import React from "react";
import "./App.scss";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/scss/argon-design-system-react.scss";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
// import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import classnames from "classnames";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Header from "./components/header/Header.component";
class App extends React.Component {
  state = {};
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
