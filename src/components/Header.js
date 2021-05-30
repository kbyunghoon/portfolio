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
  const menu = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Skills",
    },
    {
      id: 4,
      title: "Project",
    },
  ];

  return (
    <Head>
      <Container>
        <Cover>
          {menu.map((p) => {
            return (
              <List>
                <Link
                  activeClass="active"
                  to={p.title}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {p.title}
                </Link>
              </List>
            );
          })}
        </Cover>
      </Container>
    </Head>
  );
};

const Head = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 50rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background: rgba(45, 52, 54, 0.7);
  border-radius: 0 0 50px 50px;
`;

const Cover = styled.div`
  width: 40rem;
  justify-content: space-between;
  display: flex;
`;

const List = styled.div`
  font-family: "AppleSDGothicNeoR", sans-serif;
  display: flex;
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
