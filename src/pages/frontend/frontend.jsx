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
import NotFoundPage from "../404page/404Page";
import ProtectedRoute from "../../protectedRoute/ProtectedRoute.component";

class FrontView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/courses" component={CoursesPage} />
          {/* <Route exact path="/checkout" component={CheckoutPage} /> */}
          <ProtectedRoute
            exact
            path="/checkout"
            component={CheckoutPage}
            componentToRedirect="/signin"
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default FrontView;
