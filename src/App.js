import React from 'react';
import styled from 'styled-components'

function App() {
  return (
    <BackGround >
      <TopBar />
      <MessageBox />
      <MessageInputBar />
    </BackGround>
  );
}
const BackGround = styled.div`
  margin : 0px;
  padding: 0px;
`;

const TopBox = styled.div`
  background-color: lightgrey;
  color: grey;
  display : flex;
  padding: 2%;
  border-bottom : solid 1px grey;
`;

const ProfileImage = styled.img`
  width: 60px;
  height : 60px;
  border-radius: 70%;
  overflow: hidden;
`;
const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 60px;
  font-size : 20px;
`;

const ChattingImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin: 15px 10px 0px;  
`;

const ChattingContext = styled.div`
  padding-left: 20px;
  line-height: 28px;
  font-size: 15px;
  border : 1px solid lightgrey;
  border-radius : 30%;
  margin : 15px 0px 0px;
  padding : 10px;
`;
const ChattingBubble = styled.div`
  display: flex;
`;

const MessageInputContainer = styled.div`
  color: grey;
  display : flex;
  margin: 3% 0%;
  border-top : solid 1px grey;
  align-items: stretch;
`;

const MessageInputBox = styled.input`
  width: 90%;
  height: 26px;
  margin : 2% 0% 2% 2%;
  border: 0.5px lightgray solid;
  text-align: center;
  border-radius: 30px;
  &:focus{
    outline: none;
  }
`;
const MessageInputButton = styled.button`
  width: 10%;
  height: 30px;
  border-radius: 10px;
  border: 0.5px lightgray solid;
  text-align: center;
  margin: 2%;
  &:focus{
    outline: none;
    border: 0.5px gray solid;
    background-color: lightgray;
  }
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
    <ChattingBubble>
      <ChattingImage src={process.env.PUBLIC_URL + "/img.jpg"} alt="" />
      <ChattingContext>hello</ChattingContext>
    </ChattingBubble>
  );
}
function MessageBox(props) {
  return (
    <div>
      <MessageBubble />
      <MessageBubble />

    </div>
  );
}

function MessageInputBar(props) {

  function clickInputButton(event) {

  }

  return (
    <MessageInputContainer>
      <MessageInputBox placeholder="message"></MessageInputBox>
      <MessageInputButton onClick={clickInputButton}>push</MessageInputButton>
    </MessageInputContainer>
  );
}

export default App;
