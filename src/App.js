import React, { useState } from 'react';
import TopBar from './TopBar'
import MessageBox from './MessageBox'
import MessageInputBar from './MessageInputBar'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  let ID = 1;
  const [userChattingMessage, setUserChattingMessage] = useState({ID: 1, messageInput: ""});
  
  function clickProfileImageButton(userID){
    ID=userID;
  }
  function clickInputButton(messageUserInput) {
    setUserChattingMessage({ID: ID, messageInput: messageUserInput});
  }

  return (
    <Container >
      <TopBar clickProfileImageButton={clickProfileImageButton}/>
      <MessageBox userChattingMessage={userChattingMessage}/>
      <MessageInputBar clickInputButton={clickInputButton}/>
    </Container>
  );
}

export default App;
