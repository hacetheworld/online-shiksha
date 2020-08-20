import React from "react";

// React Router Component
import { Switch, Route } from "react-router-dom";

// Reusable Custom Component
import Header from "../../components/header/Header.component";
import Footer from "../../components/footer/Footer.component";
import LandingPage from "../../components/landingPage/landingPage.component";
import CoursesPage from "./Courses/CoursesPage";
import CheckoutPage from "./checkout/CheckoutPage";
import Register from "./register/RegisterPage";
import SignIn from "./signin/SignInPage";

class FrontView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handle_login, handle_signup, logged_in } = this.props;
    return (
      <>
        <Header
          handle_login={this.handle_login}
          handle_signup={this.handle_signup}
          logged_in={logged_in}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default FrontView;
