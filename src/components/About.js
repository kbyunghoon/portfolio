import React, { Fragment } from "react";
import styled from "styled-components";
import img from "media/img/profileimg.jpg";
import Fade from "react-reveal/Fade";
import { ReactComponent as Copy } from "../media/svg/copy.svg";

const About = () => {
  const copy = () => {
    navigator.clipboard.writeText("kbhthl11@gmail.com");
    alert("이메일 복사 완료");
  };

  return (
    <Container>
      <AboutText>About</AboutText>
      <Fade right>
        <Profile>
          <ProfileImg src={img} />
          <Produce>
            <TextBold>김병훈(Frontend Develeoper)</TextBold>
            <TextBold style={{ marginTop: "15px" }}>Email</TextBold>
            <Text>
              kbhthl11@gmail.com
              <Copy onClick={copy} />
            </Text>
            <TextBold style={{ marginTop: "15px" }}>Github</TextBold>
            <Text
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                textUnderlinePosition: "under",
              }}
              onClick={() =>
                window.open("https://github.com/kbyunghoon", "_blank")
              }
            >
              https://github.com/kbyunghoon
            </Text>
          </Produce>
        </Profile>
      </Fade>
      <Fade left>
        <WhoamI>Who Am I?</WhoamI>
        <Subtitle>저는 무언가 만드는 것을 좋아합니다.</Subtitle>
        <Div
          style={{
            fontSize: "1.2rem",
            marginTop: "1rem",
            margin: "auto 2rem",
            lineHeight: "2rem",
            marginBottom: "12rem",
            textAlign: "center",
          }}
        >
          개발자의 매력에 빠지기 이전에 연극영화학과를 졸업하여 CG를 이용하여
          3D를 모델링 하는 것을 원했습니다.
          <br />
          모델링 프로그램 내에 사용하는 파이썬을 다루던 중 재미를 느끼게 되었고
          <br />
          개발자에 대해 검색을 하면서 만들고 보여주는 것을 좋아하는 저는
          개발자에 매료되었습니다.
          <br />
          이후 항해99 부트캠프에서 코딩을 공부하면서 코딩을 하는 것이 너무
          좋습니다.
        </Div>
      </Fade>
    </Container>
  );
};

const Subtitle = styled.div`
  display: flex;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  margin: auto 1rem;
  margin-top: 1rem;
  text-align: center;
  word-break: keep-all;
`;

const WhoamI = styled.div`
  margin-top: 100px;
  font-size: 5rem;
  text-align: center;
  font-family: "AppleSDGothicNeoB";
  display: flex;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const Div = styled.div`
  display: flex;
  color: white;
`;

const Text = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 20px;
  display: flex;
  color: white;
  & > svg {
    margin-left: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`;

const Produce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 640px) {
    margin-left: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;

const AboutText = styled.div`
  user-select: none;
  margin-top: 5rem;
  margin-bottom: 1rem;
  display: flex;
  text-decoration: underline;
  font-size: 5rem;
  color: white;
  font-family: "AppleSDGothicNeoR";
  text-underline-position: under;
  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const Profile = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
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
  display: flex;
  border: 1px solid #ededed;
  transition: 0.5s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 640px) {
    margin-bottom: 1rem;
  }
`;

const TextBold = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 25px;
  font-weight: 600;
  display: flex;
  color: white;
  @media only screen and (max-width: 640px) {
    justify-content: center;
  }
`;

export default About;
