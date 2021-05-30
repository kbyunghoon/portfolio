import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";

const Project = () => {
  const project = {
    0: {
      id: 1,
      title: "인스타그램 클론코딩",
      url: "https://youtu.be/OJqWtzs6EeM",
      notionurl: "https://www.notion.so/302b0dabcd1841c7b2fdd9561bc7a750",
    },
    1: {
      id: 2,
      title: "항해하우스",
      url: "https://youtu.be/zD8-Xns-jrs",
      notionurl: "https://www.notion.so/35f8ce75569d495c90bad49d558a2e3e",
    },
    2: {
      id: 3,
      title: "트리포트",
      url: "https://youtu.be/gfU-4di9ncs",
      notionurl: "https://www.notion.so/Triport-33eba307738c44a294474d4498b362b6",
    },
  };

  const [settings, setSettings] = useState(project[0]);

  const changeProject = (e) => {
    setSettings(project[e.target.id]);
  };

  return (
    <Container>
      <ProjectText>Project</ProjectText>
      <ProjectContainer>
        <Projectis id="0" onClick={changeProject}>
          클론코딩
        </Projectis>
        <Projectis id="1" onClick={changeProject}>
          항해하우스
        </Projectis>
        <Projectis id="2" onClick={changeProject}>
          트리포트
        </Projectis>
      </ProjectContainer>
      <ProjectBox>
        <ProjectWrap>
          <Title>{settings.title}</Title>
          <Bar />
          <ReactPlayer
            width="480px"
            height="270px"
            url={settings.url}
            controls
          />
          <Button
            onClick={() => {
              window.open(settings.notionurl, "_blank");
            }}
          >
            노션 보러가기
          </Button>
        </ProjectWrap>
      </ProjectBox>
    </Container>
  );
};

const Button = styled.div`
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

const Text = styled.div``;

const Title = styled.div`
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
  text-underline-position: under;
  margin-top: 4rem;
  display: flex;
  text-decoration: underline;
  font-size: 5rem;
  font-family: "AppleSDGothicNeoR";
  margin-bottom: 5rem;
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
  font-family: "paybooc-Bold";
  font-size: 18px;
  height: 32px;
  position: relative;
  background: #000000;
  border-radius: 12px;
  padding: 5px 19px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 8px -1px rgb(21 25 36 / 32%);
  display: flex;
  align-items: center;
  :hover {
    animation: ${upDownHover} 1s ease-in infinite;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
`;

const ProjectBox = styled.div`
  background: #ecececa1;
  position: relative;
  padding: 20px;
  margin-top: 44px;
  text-align: center;
`;

const ProjectWrap = styled.div`
  background: #ffffff;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 15px;
`;

export default Project;
