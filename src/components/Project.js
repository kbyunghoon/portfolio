import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";
import Fade from "react-reveal/Fade";

const Project = () => {
  const project = {
    0: {
      id: 1,
      title: "트리포트(여행SNS)",
      url: "https://youtu.be/gfU-4di9ncs",
      notionurl:
        "https://www.notion.so/Triport-33eba307738c44a294474d4498b362b6",
      desc: [
        "여행 SNS으로 영상과 여행 이야기를 볼 수 있다.",
        "프론트엔드 3명, 백엔드3명, 디자이너 1명 협업",
      ],
      what: [
        "Trils(영상) 페이지 구현",
        "라이브 스트리밍 서비스를 이용한 성능 최적화",
        "모바일에 최적화 된 반응형 구현",
      ],
      tech: "Javascript, React, Styled-Components, Redux Toolkit, hls.js",
    },
    1: {
      id: 2,
      title: "인스타그램(클론코딩)",
      url: "https://youtu.be/OJqWtzs6EeM",
      notionurl: "https://www.notion.so/302b0dabcd1841c7b2fdd9561bc7a750",
      desc: [
        "대중적인 SNS 인스타그램을 주제로 한 클론코딩 프로젝트",
        "프론트엔드 2명, 백엔드 2명 협업",
      ],
      what: [
        "인스타그램 메인페이지 포스트 부분 구현",
        "moment 라이브러리를 사용한 시간 계산",
      ],
      tech: "Javascript, React, Styled-Components, Moment",
    },
    2: {
      id: 3,
      title: "항해하우스(관심사 채팅방)",
      url: "https://youtu.be/zD8-Xns-jrs",
      notionurl: "https://www.notion.so/35f8ce75569d495c90bad49d558a2e3e",
      desc: ["같은 관심사를 갖고 있는 인원만의 채팅방"],
      what: ["프로필 페이지 구현", "Formdata를 사용한 이미지 파일 전송"],
      tech: "Javascript, React, Styled-Components, Redux Toolkit",
    },
  };

  const [settings, setSettings] = useState(project[0]);

  const changeProject = (e) => {
    setSettings(project[e.target.id]);
  };

  return (
    <Container>
      <Fade up>
        <ProjectText>Project</ProjectText>
        <ProjectContainer>
          <Projectis id="0" onClick={changeProject}>
            트리포트
          </Projectis>
          <Projectis id="1" onClick={changeProject}>
            클론코딩
          </Projectis>
          <Projectis id="2" onClick={changeProject}>
            항해하우스
          </Projectis>
        </ProjectContainer>
        <ProjectBox>
          <ProjectWrap>
            <Title>{settings.title}</Title>
            <Bar />
            <Video>
              <ReactPlayer
                width="100%"
                height="100%"
                url={settings.url}
                controls
              />
            </Video>
            <TextBold>Description</TextBold>
            {settings.desc.map((p, idx) => {
              return <Text key={idx}>{p}</Text>;
            })}
            <TextBold>What did I do?</TextBold>
            {settings.what.map((p, idx) => {
              return (
                <Text key={idx}>
                  <Text>•</Text>
                  <Text>{p}</Text>
                </Text>
              );
            })}
            <TextBold>Tech Stack</TextBold>
            <Text>{settings.tech}</Text>
            <Button
              onClick={() => {
                window.open(settings.notionurl, "_blank");
              }}
            >
              프로젝트 상세보기
            </Button>
          </ProjectWrap>
        </ProjectBox>
      </Fade>
    </Container>
  );
};

const Text = styled.div`
  display: flex;
  font-size: 1rem;
  flex-direction: row;
  text-align: left;
`;

const TextBold = styled.div`
  display: flex;
  font-family: "AppleSDGothicNeoSB";
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Button = styled.div`
  user-select: none;
  background: #222;
  box-shadow: 10px 10px 14px rgb(56 56 56 / 30%);
  margin: 0 auto;
  width: 10rem;
  margin-top: 30px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  user-select: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Bar = styled.div`
  display: block;
  border: 1px solid #efefef;
  margin: 0 30px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ProjectText = styled.div`
  user-select: none;
  text-underline-position: under;
  margin-top: 4rem;
  display: flex;
  text-decoration: underline;
  font-size: 5rem;
  font-family: "AppleSDGothicNeoR";
  margin-bottom: 5rem;
  @media only screen and (max-width: 580px) {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const Video = styled.div`
  width: 480px;
  height: 270px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 427px;
    height: 240px;
  }
  @media only screen and (max-width: 540px) {
    width: 373px;
    height: 210px;
  }
  @media only screen and (max-width: 470px) {
    width: 320px;
    height: 180px;
  }
  @media only screen and (max-width: 400px) {
    width: 267px;
    height: 150px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 0.2px solid; */
`;

const upDownHover = keyframes`
{
  0% {
    top: 0px;
  }
  30% {
    top: 7px;
  }
  50% {
    top: -2px;
  }
  70% {
    top: 4px;
  }
  100% {
    top: 0px;
  }
}
`;

const Projectis = styled.div`
  user-select: none;
  font-family: "paybooc-Bold";
  font-size: 18px;
  height: 32px;
  width: 120px;
  position: relative;
  background: #000000;
  border-radius: 12px;
  padding: 5px 19px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 8px 2px rgb(21 25 36 / 32%);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    animation: ${upDownHover} 1s ease-in infinite;
  }
  @media only screen and (max-width: 580px) {
    margin-bottom: 1rem;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 35rem;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ProjectBox = styled.div`
  background: #ecececa1;
  position: relative;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  @media only screen and (min-width: 580px) {
    margin-top: 44px;
  }
`;

const ProjectWrap = styled.div`
  background: #ffffff;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 15px;
`;

export default Project;
