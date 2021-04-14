import React from "react";
import styled from "styled-components";
import userProfileSet from "./User";

const Container = styled.div`
  margin-left: 10vw;
`;

const ProfileContainer = styled.div`
  width: available;
  height: 30vh;
  margin: 1vh 2vw 1vh 0vw;
  border: 1px;
  border-color: #b1b1b1;
  background-color: #fffffa;
  padding: 1vh 3vw;
  border-radius: 10px;
`;

function MoreView() {
  return (
    <Container>
      <h1>더보기</h1>
      <ProfileContainer>
        <h3>{userProfileSet[1].name}</h3>
      </ProfileContainer>
    </Container>
  );
}

export default MoreView;
