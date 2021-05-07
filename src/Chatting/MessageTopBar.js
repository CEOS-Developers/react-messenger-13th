import React from "react";
import styled from "styled-components";
import userProfileSet from "../User";

const TopBox = styled.div`
  background-color: #e99ba7;
  color: #ba4f5f;
  display: flex;
  padding: 1% 2% 1% 1.5%;
  border-bottom: solid 1px #d16f80;
  position: fixed;
  top: 0px;
  width: 100%;
  margin-left: 8vw;
`;

const ProfileImageButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  overflow: hidden;
  padding: 0px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  background-position: 0px 0px;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;
const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 60px;
  font-size: 20px;
`;

export default function TopBar({ switchUser, currentUser }) {
  //전달할때 매우매우 중요함 {안에 같이}

  function handleProfileImageButtonClick() {
    switchUser();
  }

  return (
    <TopBox>
      <ProfileImageButton onClick={handleProfileImageButtonClick}>
        <ProfileImage
          src={process.env.PUBLIC_URL + "/" + currentUser + ".jpg"}
          alt=""
        />
      </ProfileImageButton>
      <ProfileName>{userProfileSet[currentUser - 1].name}</ProfileName>
    </TopBox>
  );
}
