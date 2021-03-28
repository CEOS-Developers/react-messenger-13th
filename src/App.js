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
  background-color: #e99ba7;
  color: #ba4f5f;
  display : flex;
  padding: 1% 2% 1% 1.5%;
  border-bottom : solid 1px #d16f80;
  position: fixed;
  top: 0px;
  width: 100%;

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
  margin: 15px 15px 0px 15px; 
`;

const ChattingContext = styled.div`
  padding-left: 20px;
  line-height: 28px;
  font-size: 15px;
  border : 1px solid #e99ba7;
  border-radius : 22px;
  margin : 15px 0px 0px;
  padding : 10px;
  background-color:#f4f4f4;
  color: gray;
`;
const ChattingBubble = styled.div`
  display: flex;
`;

const ChattingContainer = styled.div`
  padding-top: 97px;
  padding-bottom: 100px;
  float: left;
`;

const MessageInputContainer = styled.div`
  color: grey;
  display : flex;
  margin: 1% 0% 0%;
  border-top : solid 1px #d16f80;
  align-items: stretch;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #e99ba7;
`;

const MessageInputBox = styled.input`
  color: grey;
  width: 90%;
  height: 40px;
  margin : 1% 0% 1% 2%;
  border: 0.5px #d16f80 solid;
  text-align: center;
  border-radius: 30px;
  &:focus{
    outline: none;
  }
`;
const MessageInputButton = styled.button`
  color: #f4f4f4;
  width: 10%;
  height: 44px;
  border-radius: 10px;
  background-color: #ba4f5f;
  border: 0.5px #ba4f5f solid;
  text-align: center;
  margin: 1%;
  &:focus{
    outline: none;
  }
  &:hover{
    background-color: #d16f80;
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
    <ChattingContainer>
      <MessageBubble />
      <MessageBubble />
    </ChattingContainer>
  );
}

function MessageInputBar(props) {

  function clickInputButton(event) {

  }

  return (
    <MessageInputContainer>
      <MessageInputBox placeholder="message"></MessageInputBox>
      <MessageInputButton onClick={clickInputButton}>send</MessageInputButton>
    </MessageInputContainer>
  );
}

export default App;
