import React from "react";
import styled from "styled-components";
import userProfileSet from "./constants/User";
import { ProfileImage } from "./Chatting/MessageTopBar";
const Container = styled.div`
  padding-top: 3vh;
  margin-left: 10vw;
`;
const ProfileName = styled.div`
  padding: 1vh 3vw 0.2vh;
`;
const MenuSelectContainer = styled.h3`
  padding: 1.5vh 2vw;
  border-top: 1px solid #e99ba7;
  margin: 0;
`;
const ProfileImageNew = styled(ProfileImage)`
  width: 30vw;
  height: auto;
  margin-left: 25vw;
  margin-bottom: 2vh;
`;
const ProfileContainer = styled.div`
  width: auto;
  height: auto;
  margin: 1vh 2vw 1vh 0vw;
  border: 1px;
  border-color: #b1b1b1;
  background-color: #fffffa;
  border-radius: 10px;
`;

function MoreView() {
  return (
    <Container>
      <h1>더보기</h1>
      <ProfileContainer>
        <ProfileName>
          <h2>{userProfileSet[1].name}</h2>
          <ProfileImageNew
            src={process.env.PUBLIC_URL + "/2.jpg"}
            alt=""
          ></ProfileImageNew>
        </ProfileName>
        <div></div>
        <MenuSelectContainer>설정</MenuSelectContainer>
        <MenuSelectContainer>보안</MenuSelectContainer>
        <MenuSelectContainer>로그아웃</MenuSelectContainer>
        <MenuSelectContainer>종료</MenuSelectContainer>
      </ProfileContainer>
    </Container>
  );
}

export default MoreView;
