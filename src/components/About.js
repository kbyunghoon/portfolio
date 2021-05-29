import React, { Fragment } from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <AboutText>About</AboutText>
      <Profile>
        <ProfileImg src="https://i.ibb.co/MDKhN7F/kakao-11.jpg" />
        <Produce>
          <Name>김병훈</Name>
          <FrontEnd>FrontEnd Devleoper</FrontEnd>
          <BornIn>1995.11.02</BornIn>
        </Produce>
      </Profile>
    </Container>
  );
};

const Produce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AboutText = styled.div`
  display: flex;
  text-decoration: underline;
  font-size: 3rem;
`;

const Profile = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

const ProfileImg = styled.div`
  --size: 200px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-position: center;
  background-image: url(${(props) => props.src});
  background-color: white;
  background-size: cover;
  margin-left: 16px;
  display: flex;
  border: 1px solid #ededed;
`;

const Name = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 30px;
  font-weight: 600;
  display: flex;
`;

const FrontEnd = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 30px;
  font-weight: 600;
  display: flex;
`;

const BornIn = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 30px;
  font-weight: 600;
  display: flex;
`;

export default About;
