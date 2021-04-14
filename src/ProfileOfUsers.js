import React from "react";
import { useHistory } from "react-router";
import {
  ProfileImage,
  ProfileName,
  ProfileBubbleContainer,
} from "./ChattingProfile";

function ProfileBubble({ profile }) {
  //파라미터 쓰기
  const history = useHistory();
  function handleProfileClick() {
    history.push({
      pathname: "/profile-of/:userID" + profile.profileImage,
      state: { userID: profile.profileImage },
    });
  }
  return (
    <ProfileBubbleContainer onClick={handleProfileClick}>
      <ProfileImage
        src={process.env.PUBLIC_URL + "/" + profile.profileImage + ".jpg"}
      />
      <ProfileName> {profile.name} </ProfileName>
    </ProfileBubbleContainer>
  );
}

function ProfileOfUsers({ userProfileSet }) {
  return (
    <div>
      {userProfileSet.map((profile, id) => (
        <ProfileBubble profile={profile} key={id} />
      ))}
    </div>
  );
}

export default ProfileOfUsers;
