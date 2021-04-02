import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileContainer from './ProfileContainer';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

const initialChatData = [];

const Siwon = {
  id: 0,
  name: '정시원',
  profileImgSrc: process.env.PUBLIC_URL + '/logo512.png',
};

const Youngwoo = {
  id: 1,
  name: '김영우',
  profileImgSrc: process.env.PUBLIC_URL + '/logo512.png',
};

function App() {
  const [messages, setMessages] = useState(initialChatData);
  const [currentUser, setCurrentUser] = useState(Siwon);

  function toggleCurrentUser() {
    if (currentUser === Siwon) {
      setCurrentUser(Youngwoo);
    } else {
      setCurrentUser(Siwon);
    }
  }

  function addChatData(message) {
    setMessages(
      messages.concat([
        {
          chatId: messages.length,
          chatText: message,
          userId: 0,
          profileImg: process.env.PUBLIC_URL + '/logo512.png',
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
