import React from "react";
import styled from "styled-components";
import {
  ProfileImage,
  ProfileName,
  ProfileBubbleContainer,
} from "../ChattingList/ChattingProfile";

const ProfileMessage = styled.p`
  color: gray;
  font-size: 14px;
  margin: 0;
  padding-left: 10px;
`;

const UserName = styled(ProfileName)`
  margin-bottom: 3px;
  margin-top: 7px;
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
