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
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 900px;
  background: #F2F8FF;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  & * {
    font-family: Helvetica, Arial, sans-serif;
  }
`;

const participants = [
  {
    name: '김영우',
    lastActive: 'now',
    profilePictureUrl: '/profile-pictures/0.jpg',
    id: 0
  },
  {
    name: '이재용',
    lastActive: 'now',
    profilePictureUrl: '/profile-pictures/1.jpg',
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
