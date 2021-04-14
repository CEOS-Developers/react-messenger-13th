import React, { useState } from 'react';
import TopBar from './MessageTopBar'
import MessageBox from './MessageBox'
import MessageInputBar from './MessageInputBar'
import MenuBar from './MenuBar'
import styled from 'styled-components';
import { useParams } from 'react-router';
import userProfileSet from './User'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

function ChattingView() {
  let {userID} = useParams();
  const [isMe, setIsMe] = useState(true);
  const currentUser = isMe? 2 : userID;
  const [userChattingMessageSet, setUserChattingMessageSet] = useState([]);

  function switchUser(){
    setIsMe(!isMe);
  }
  function clickInputButton(messageUserInput) {
    let ID = Date.now();
    setUserChattingMessageSet(formerMessage => [...formerMessage, {chattingUser: currentUser, messageContext: messageUserInput, id: ID}]);
  }

  return (
    <Container >
      <MenuBar/>
      <TopBar switchUser={switchUser} currentUser={currentUser}/>
      <MessageBox userChattingMessageSet={userChattingMessageSet}/>
      <MessageInputBar clickInputButton={clickInputButton}/>
    </Container>
  );
}

export default ChattingView;
