import React, { Fragment } from "react";
import { Arrow } from "media/svg/Svg";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "components/Home";
import About from "components/About";
import Skills from "components/Skills";
import "./scss/App.scss";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Project from "components/Project";
import styled, { keyframes } from "styled-components";

const App = () => {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      <FloatingBox>
        <FloatingGoTop onClick={top}>
          <Arrow />
        </FloatingGoTop>
      </FloatingBox>
      <Header />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="Project">
        <Project />
      </Element>
      <Footer />
    </Fragment>
  );
};

const FloatingGoTop = styled.div`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 50;
  background-color: #618ae7;
  border-radius: 25px;
  transform: rotate(-90deg);
  transform-origin: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 60%;
    height: 60%;
    fill: #ffffff;
  }
  margin-bottom: 0.5rem;
`;

const FloatingBox = styled.div`
  position: fixed;
  bottom: 56px;
  right: 3%;
  z-index: 50;
  display: flex;
  transition: 0.5s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export default App;
