import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Nav from "../navbar/Navbar";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import LastMinuteOffers from "../../pages/LastMinuteOffers";
import pageNotFound from "../../pages/PageNotFound";
import Footer from "../footer/Footer";

const RouteHandler = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/notfound" component={pageNotFound} />
          <Route>
            <Nav />
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/about" component={About} exact />
              <Route path="/gallery" component={Gallery} exact />
              <Route path="/contact" component={Contact} exact />
              <Route
                path="/lastminuteoffers"
                component={LastMinuteOffers}
                exact
              />
              <Redirect to="/notfound" />
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default RouteHandler;
