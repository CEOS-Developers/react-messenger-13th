import React from 'react';
import styled from 'styled-components'

function App() {
  return (
    <BackGround >
      <TopBar />
      <MessageBubble />
      <MessageInputBar />
    </BackGround>
  );
}
const BackGround = styled.div`
  margin : 0px;
  padding: 0px;
`;

const TopBox = styled.div`
  color: grey;
  display : flex;
  padding: 3%;
  border-bottom : solid 1px grey;
`;

const ProfileImage = styled.img`
  width: 65px;
  height : 100%;
  border-radius: 70%;
  overflow: hidden;
`;
const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 65px;
  font-size : 20px;
`;

function TopBar(props) {
  return (
    <TopBox>
      <ProfileImage src={process.env.PUBLIC_URL + "/img.jpg"} alt="" />
      <ProfileName>name, state</ProfileName>
    </TopBox>
  );
}

function MessageBubble(props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/img.jpg"} alt="" width="50px" height="50px;" />
      <div>hello</div>
    </div>
  );
}

function MessageInputBar(props) {

  function clickInputButton(event) {

  }

  return (
    <div>
      <input placeholder="message"></input>
      <button onClick={clickInputButton}>push</button>
    </div>
  );
}

export default App;
