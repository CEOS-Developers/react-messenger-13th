import React, { useState } from 'react';
import styled from 'styled-components';
import ActiveUser from './components/ActiveUser';
import ChatContainer from './components/ChatContainer';
import ChatForm from './components/ChatForm';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: #F2F8FF;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const participants = [
  {
    name: '김영우',
    lastActive: 'now',
    profilePictureUrl: '',
    id: 0
  },
  {
    name: '이소정',
    lastActive: 'now',
    profilePictureUrl: '',
    id: 1
  }
]

function App() {
  const [activeUser, setActiveUser] = useState(participants[0]);
  const [messages, setMessages] = useState([]);

  const handleActiveUserClick = () => {
    if (activeUser.id === 1) {
      setActiveUser(participants[0]);
    } else {
      setActiveUser(participants[1]);
    }
  }

  const addNewMessage = (userId, msg) => {
    setMessages(prevMessages => [...prevMessages, { id: userId, msg }]);
  }

  const handleChatFormSubmit = (msg) => {
    addNewMessage(activeUser.id, msg);
  }

  return (
    <Wrapper>
      <Container>
        <ActiveUser 
          handleActiveUserClick={ handleActiveUserClick }
          activeUser={ activeUser } 
        />
        <ChatContainer 
          participants={ participants } 
          messages={ messages }
        />
        <ChatForm 
          handleChatFormSubmit={ handleChatFormSubmit }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
