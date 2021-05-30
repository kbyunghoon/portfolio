import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const Home = () => {
  return (
    <Container>
      <Shadow>
        <Title>
          <Typist avgTypingDelay={100}>
            <Typist.Delay ms={500} />
            Front-end Developer 김병훈입니다.
          </Typist>
        </Title>
      </Shadow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  overflow: hidden;
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(45, 52, 54, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  color: #fff;
  text-shadow: 4px 4px 30px rgba(150, 150, 150, 1);
  user-select: none;
  transition: 1s;
  margin: auto 1rem;
  word-break: keep-all;
  display: flex;
  text-align:center;
`;

export default Home;
