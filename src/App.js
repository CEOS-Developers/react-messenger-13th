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

/**
 * @global
 * @property {string} name - Display name of the user.
 * @property {string} status - Current status of user.
 * @property {string} profilePictureUrl - Location of the profile picture image file
 * @property {number} id - Unique ID of the user.
 */
const participants = [
  {
    name: '김영우',
    status: '지금 활동 중',
    profilePictureUrl: '/profile-pictures/0.jpg',
    id: 0
  },
  {
    name: '이재용',
    status: '지금 활동 중',
    profilePictureUrl: '/profile-pictures/1.jpg',
    id: 1
  }
]

function App() {
  // Currently selected user
  const [activeUser, setActiveUser] = useState(participants[0]);

  /**
   * Store all messages in the conversation
   * @property {number} id - ID of the user who sent the message.
   * @property {string} msg - Contents of the message.
   */
  const [messages, setMessages] = useState([]);

  /**
   * Change active user when user clicks on header bar
   */
  const handleActiveUserClick = () => {
    if (activeUser.id === 1) {
      setActiveUser(participants[0]);
    } else {
      setActiveUser(participants[1]);
    }
  }

  /**
   * Adds a new message to the conversation
   * @param {int} userId - The ID of the user who sent the message
   * @param {string} msg - The contents of the message
   */
  const addNewMessage = (userId, msg) => {
    setMessages(prevMessages => [...prevMessages, { id: userId, msg }]);
  }

  /**
   * Handles send action of message. Receives states lifted from ChatForm
   * @param {string} msg - Message that the user entered into ChatForm > ChatInput
   */
  const handleChatSend = (msg) => {
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
          handleChatSend={ handleChatSend }
          activeUser={ activeUser } 
        />
      </Container>
    </Wrapper>
  );
}

export default App;
