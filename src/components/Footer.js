import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Container>
      <Fade up>
        <Text>본 페이지는 개인 포트폴리오용으로 제작되었습니다.</Text>
        <Text>© 2021 Byunghoon Kim. All Rights Reserved.</Text>
      </Fade>
    </Container>
  );
};

const Text = styled.div`
  font-size: 0.8rem;
  font-family: "AppleSDGothicNeoR", sans-serif;
  color: white;
`;

const Container = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 50px;
  background-color: black;
`;

export default Footer;
