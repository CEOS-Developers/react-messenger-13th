import React, { useState } from "react";
import userProfileSet from "./User";
import ChattingListTopBar from "./ChattingListTopBar";
import ProfileOfUsers from "./ProfileOfUsers";
import ProfileModal from "./ProfileModal";

function ProfileListView() {
  const [matchUserSet, setMatchUserSet] = useState(userProfileSet);
  const [modalState, setModalState] = useState(false);
  const [detailProfile, setDetailProfile] = useState(userProfileSet[1]);

  function handleModal(profileSelected) {
    setModalState(!modalState);
    setDetailProfile(profileSelected);
  }

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
      <ProfileModal
        modalState={modalState}
        setModalState={setModalState}
        detailProfile={detailProfile}
      />
      <ChattingListTopBar searchUser={searchUser} viewTitle={"프로필"} />
      <ProfileOfUsers userProfileSet={matchUserSet} handleModal={handleModal} />
    </div>
  );
}

export default ProfileListView;
