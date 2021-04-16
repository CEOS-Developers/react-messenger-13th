import React, { useState } from "react";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";
import userProfileSet from "./User";
import styled from "styled-components";

const Margin = styled.div`
  height: 1.9vh;
`;

function ChattingList() {
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
      <Margin />
      <ChattingListTopBar searchUser={searchUser} viewTitle={"채팅"} />
      <ChattingProfile userProfileSet={matchUserSet} />
    </div>
  );
}

export default ChattingList;
