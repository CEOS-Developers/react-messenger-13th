import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileContainer from './ProfileContainer';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

const initialChatData = [];

const Yunsun = {
  id: 0,
  name: '정윤선',
  profileImgSrc: process.env.PUBLIC_URL + '/myphoto.jpg',
};

const Babodog = {
  id: 1,
  name: '바보개',
  profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
};

function App() {
  const [messages, setMessages] = useState(initialChatData);
  const [currentUser, setCurrentUser] = useState(Yunsun);

  function toggleCurrentUser() {
    if (currentUser === Yunsun) {
      setCurrentUser(Babodog);
    } else {
      setCurrentUser(Yunsun);
    }
  }

  function addChatData(message) {
    setMessages(
      messages.concat([
        {
          chatId: messages.length,
          chatText: message,
          userId: currentUser.id,
          profileImgSrc: currentUser.profileImgSrc,
        },
      ])
    );
  }

  return (
    <Container>
      <ProfileContainer
        currentUser={currentUser}
        toggleCurrentUser={toggleCurrentUser}
      />
      <ChatList chatListData={messages} />
      <ChatInput addChatData={addChatData} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
