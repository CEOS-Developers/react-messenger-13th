import React, { useState } from 'react';
import TopBar from './TopBar'
import MessageBox from './MessageBox'
import MessageInputBar from './MessageInputBar'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

function App() {
  let chattingUser = 1;
  const [userChattingMessageSet, setUserChattingMessageSet] = useState([]);


  function clickProfileImageButton(userID){
    chattingUser=userID;
  }
  function clickInputButton(messageUserInput) {
    let ID = Date.now();
    setUserChattingMessageSet(formerMessage => [...formerMessage, {chattingUser: chattingUser, messageContext: messageUserInput, id: ID}]);
  }

  return (
    <Container >
      <TopBar clickProfileImageButton={clickProfileImageButton}/>
      <MessageBox userChattingMessageSet={userChattingMessageSet}/>
      <MessageInputBar clickInputButton={clickInputButton}/>
    </Container>
  );
}

export default App;
