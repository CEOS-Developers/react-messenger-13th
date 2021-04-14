import React, { useState } from "react";
import userProfileSet from "./User";
import ChattingListTopBar from "./ChattingListTopBar";
import ProfileOfUsers from "./ProfileOfUsers";

function ProfileListView() {
  const [matchUserSet, setMatchUserSet] = useState(userProfileSet);

  function searchUser(searchUserInput) {
    setMatchUserSet([]);
    for (let userProfile of userProfileSet) {
      if (userProfile.name.includes(searchUserInput)) {
        setMatchUserSet((matchUser) => [...matchUser, userProfile]);
      }
    }
  }

  return (
    <div>
      <ChattingListTopBar searchUser={searchUser} viewTitle={"프로필"} />
      <ProfileOfUsers userProfileSet={matchUserSet} />
    </div>
  );
}

export default ProfileListView;
