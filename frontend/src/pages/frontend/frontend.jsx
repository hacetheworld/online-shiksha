import React from "react";

// React Router Component
import { Switch, Route } from "react-router-dom";

// Reusable Custom Component
import Header from "../../components/header/Header.component";
import Footer from "../../components/footer/Footer.component";
import LandingPage from "../../components/landingPage/landingPage.component";

class FrontView extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default FrontView;
