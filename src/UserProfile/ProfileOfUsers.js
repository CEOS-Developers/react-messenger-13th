import React from "react";
import {
  ProfileImage,
  ProfileName,
  ProfileBubbleContainer,
} from "../ChattingList/ChattingProfile";

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
      <ProfileName> {profile.name} </ProfileName>
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
