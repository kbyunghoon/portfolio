import React, { useState } from "react";
import "../css/header.css";
// import { GiHamburgerMenu } from "react-icons/gi";
import {
  Link,
  // Element,
  // Events,
  // animateScroll as scroll,
  // scrollSpy,
  // scroller,
} from "react-scroll";
import styled from "styled-components";

const Header = () => {
  const [title] = useState();

  return (
    <Head>
      <Container>
        <Cover>
          <List>
            <Link
              activeClass="active"
              to={title}
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </List>
          <List>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </List>
          <List>
            <Link
              activeClass="active"
              to={title}
              spy={true}
              smooth={true}
              duration={500}
            >
              Project
            </Link>
          </List>
          <List>
            <Link
              activeClass="active"
              to={title}
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </List>
        </Cover>
      </Container>
    </Head>
  );
};

const Head = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background: rgba(45, 52, 54, 0.7);
  border-radius: 0 0 50px 50px;
`;

const Cover = styled.div`
  width: 50rem;
  display: flex;
`;

const List = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  user-select: none;
  text-shadow: -1px 0 #f2f1f6, 0 1px #f2f1f6, 1px 0 #f2f1f6, 0 -1px #f2f1f6;
  opacity: 0.8;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    color: #fff;
    opacity: 1;
    transition: 0.3s ease-in-out;
  }
`;

export default Header;
