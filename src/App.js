import React from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import ChatList from './ChatList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const chatData = [
  {
    chatId: 0,
    chatText: '안녕!',
    userId: 0,
    profileImg: process.env.PUBLIC_URL + '/logo512.png',
  },
  {
    chatId: 1,
    chatText: '안녕!!',
    userId: 1,
    profileImg: process.env.PUBLIC_URL + '/logo512.png',
  },
  {
    chatId: 2,
    chatText: '안녕!!!',
    userId: 0,
    profileImg: process.env.PUBLIC_URL + '/logo512.png',
  },
];

function App() {
  function addChatData(message) {
    chatData.push({
      chatId: chatData.length,
      chatText: message,
      userId: 0,
      profileImg: process.env.PUBLIC_URL + '/logo512.png',
    });
  }

  return (
    <Container>
      <ChatList chatListData={chatData} addChatData={addChatData} />
      <ChatInput />
    </Container>
  );
}

export default App;
