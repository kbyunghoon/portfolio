import React, { Fragment } from "react";
import styled from "styled-components";
import img from "media/img/profileimg.jpg";

const About = () => {
  return (
    <Container>
      <AboutText>About</AboutText>
      <Profile>
        <ProfileImg src={img} />
        <Produce>
          <TextBold>김병훈(Frontend Devleoper)</TextBold>
          <TextBold style={{ marginTop: "15px" }}>Email</TextBold>
          <Text>kbhthl11@gmail.com</Text>
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
      <Div
        style={{
          marginTop: "100px",
          fontSize: "5rem",
          fontFamily: "AppleSDGothicNeoB",
        }}
      >
        Who Am I?
      </Div>
      <Div style={{ fontWeight: "600", fontSize: "1.5rem", marginTop: "1rem" }}>
        저는 무언가 만드는 것을 좋아합니다.
      </Div>
      <Div
        style={{
          fontSize: "1.2rem",
          marginTop: "1rem",
          margin: "auto 2rem",
          lineHeight: "2rem",
          marginBottom: "10rem",
          textAlign: "center",
        }}
      >
        개발자의 매력에 빠지기 이전에 연극영화학과를 졸업하여 CG를 이용하여 3D를
        모델링 하는 것을 원했습니다.
        <br />
        작년 2020년에 비전공자였던 누나가 개발자가 되고 직접 만든 웹사이트를
        보여주는 순간 저는 그것에 매료되었습니다.
        <br />
        이후 항해99 부트캠프에서 코딩을 공부하게 되었고 코딩을 하는 것이 너무
        좋습니다.
      </Div>
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  color: white;
`;

const Text = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 20px;
  display: flex;
  color: white;
`;

const Produce = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;

const AboutText = styled.div`
  margin-top: 10rem;
  margin-bottom: 1rem;
  display: flex;
  text-decoration: underline;
  font-size: 5rem;
  color: white;
  font-family: "AppleSDGothicNeoR";
  text-underline-position: under;
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

const TextBold = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 25px;
  font-weight: 600;
  display: flex;
  color: white;
`;

const BornIn = styled.div`
  font-family: "AppleSDGothicNeoR";
  font-size: 25px;
  display: flex;
`;

export default About;
