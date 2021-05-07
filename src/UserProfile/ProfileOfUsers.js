import React from "react";
import styled from "styled-components";
import {
  ProfileImage,
  ProfileName,
  ProfileBubbleContainer,
  LastMessage,
} from "../ChattingList/ChattingProfile";

const ProfileMessage = styled(LastMessage)`
  color: gray;
`;

const UserName = styled(ProfileName)`
  font-size: 18px;
  margin: 7px 0px 3px;
  padding: 10px;
`;

function ProfileBubble({ profile, handleModal }) {
  function profileClicked() {
    handleModal(profile);
  }
  //파라미터 쓰기
  return (
    <ProfileBubbleContainer onClick={profileClicked}>
      <ProfileImage
        src={process.env.PUBLIC_URL + "/" + profile.profileImage + ".jpg"}
      />
      <div>
        <UserName> {profile.name} </UserName>
        <ProfileMessage>{profile.profileMessage}</ProfileMessage>
      </div>
    </ProfileBubbleContainer>
  );
}

function ProfileOfUsers({ userProfileSet, handleModal }) {
  return (
    <div>
      {userProfileSet.map((profile, id) => (
        <ProfileBubble profile={profile} key={id} handleModal={handleModal} />
      ))}
    </div>
  );
}

export default ProfileOfUsers;
