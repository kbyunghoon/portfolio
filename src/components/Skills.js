import React, { Fragment } from "react";
import styled from "styled-components";
import Skill1 from "media/img/skills_1.png";
import Skill2 from "media/img/skills_2.png";
import Skill3 from "media/img/skills_3.png";
import ReactImg from "media/img/react.png";
import Maya from "media/img/maya.png";
import { ReactComponent as Pr } from "../media/svg/pr.svg";
import { ReactComponent as Ps } from "../media/svg/ps.svg";

const Skills = () => {
  return (
    <Container>
      <SkillsText>Skills</SkillsText>
      <SkillsContainer>
        <ImgContainer>
          <Img style={{ width: "115px", height: "115px" }} img={ReactImg} />
        </ImgContainer>
        <ImgContainer>
          <Img img={Skill1} />
        </ImgContainer>
        <ImgContainer>
          <Img img={Skill2} />
        </ImgContainer>
        <ImgContainer>
          <Img img={Skill3} />
        </ImgContainer>
      </SkillsContainer>
      {/* <AndText>And</AndText>
      <Div>
        <AndSkillsContainer>
          <SvgContainer>
            <Pr />
          </SvgContainer>
          <SvgContainer>
            <Ps />
          </SvgContainer>
          <ImgContainer>
            <MayaContainer img={Maya} />
          </ImgContainer>
        </AndSkillsContainer>
      </Div> */}
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  margin-bottom: 10rem;
`;

const AndSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  width: auto;
  margin: 0 auto;
`;

const MayaContainer = styled.div`
  background-image: url("${(props) => props.img}");
  display: flex;
  width: 115px;
  height: 115px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media only screen and (max-width: 580px) {
    width: 80px;
    height: 80px;
  }
  @media only screen and (max-width: 370px) {
    width: 60px;
    height: 60px;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  & > svg {
    width: 115px;
    height: 115px;
    @media only screen and (max-width: 580px) {
      width: 80px;
      height: 80px;
    }
    @media only screen and (max-width: 370px) {
      width: 60px;
      height: 60px;
    }
  }
`;

const Container = styled.div`
  margin-bottom: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AndText = styled.div`
  margin-top: 3.5rem;
  display: flex;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const SkillsText = styled.div`
  user-select: none;
  text-underline-position: under;
  margin-top: 10rem;
  display: flex;
  text-decoration: underline;
  font-size: 5rem;
  margin-bottom: 2rem;
  margin-top: 20rem;
  @media only screen and (max-width: 600px) {
  font-size: 4rem;
  }
  @media only screen and (max-width: 400px) {
  font-size: 3rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.div`
  background-image: url("${(props) => props.img}");
  display: flex;
  width: 85px;
  height: 115px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  width: auto;
  margin: 0 auto;
  margin-bottom: 20rem;
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
`;

export default Skills;
