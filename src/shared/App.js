import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import "./scss/App.scss";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Element name="About">
        <About />
      </Element>
      <Footer />
    </Fragment>
  );
};

export default App;
