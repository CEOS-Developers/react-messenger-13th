import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin: 15px;
`;

export const ProfileName = styled.div`
  line-height: 25px;
  font-size: 18px;
  margin: 10px 0px 10px;
  padding: 10px;
  color: gray;
`;

export const ProfileBubbleContainer = styled.div`
  display: flex;
  background-color: #f4f4f4;
  border-top: 1px solid #e99ba7;
  margin-left: 8vw;
  &:hover {
    background-color: #f0d7d7;
  }
`;

function ChattingProfileBubble({ profile }) {
  //파라미터 쓰기
  const history = useHistory();
  function handleProfileBubbleClick() {
    history.push({
      pathname: "/chat-with/" + profile.profileImage,
      state: { userID: profile.profileImage },
    });
  }
  return (
    <ProfileBubbleContainer onClick={handleProfileBubbleClick}>
      <ProfileImage
        src={process.env.PUBLIC_URL + "/" + profile.profileImage + ".jpg"}
      />
      <ProfileName> {profile.name} </ProfileName>
    </ProfileBubbleContainer>
  );
}

function ChattingProfile({ userProfileSet }) {
  return (
    <div>
      {userProfileSet.map((profile, id) => (
        <ChattingProfileBubble profile={profile} key={id} />
      ))}
    </div>
  );
}

export default ChattingProfile;
