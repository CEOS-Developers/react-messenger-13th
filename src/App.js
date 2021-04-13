import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';

const StyledGlobal = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100%;

  background: #9bbbd4;
`;

const userList = [
  {
    id: 0,
    img: `${process.env.PUBLIC_URL}/muji.jpg`,
    name: '무지',
    status: '현재 접속 중',
  },
  {
    id: 1,
    img: `${process.env.PUBLIC_URL}/corn.png`,
    name: '콘',
    status: '현재 접속 중',
  },
];

const sampleChat = [
  {
    user: userList[0],
    chatList: ['안녕하세요'],
  },
  {
    user: userList[1],
    chatList: [
      '안녕하세요',
      '저도 반갑습니다',
      `저는 ${userList[1].name}입니다.`,
    ],
  },
  {
    user: userList[0],
    chatList: ['안녕하세요', '반갑습니다', `저는 ${userList[0].name}입니다.`],
  },
  {
    user: userList[1],
    chatList: [
      '안녕하세요',
      '저도 반갑습니다',
      `저는 ${userList[1].name}입니다.`,
    ],
  },
  {
    user: userList[0],
    chatList: [
      '안녕하세요',
      '반갑습니다',
      `테스트 입력입니다테스트 입력입니다테스트 입력입니다테스트 입력입니다`,
    ],
  },
  {
    user: userList[1],
    chatList: [
      '안녕하세요',
      '저도 반갑습니다',
      `저는 ${userList[1].name}입니다.`,
    ],
  },
];

export default () => {
  const [currentUser, setCurrentUser] = useState(userList[0]);
  const [ownerUser, setOwnerUser] = useState(userList[0]);
  const [chatData, setChatData] = useState(sampleChat);

  const sendMessage = (message) => {
    if (message === '') {
      alert('빈 텍스트 입니다');
      return;
    }

    const lastChatItem = chatData[chatData.length - 1];
    if (lastChatItem.user.id === currentUser.id) {
      lastChatItem.chatList.push(message);
      setChatData([...chatData]);
    } else {
      const nextChatItem = { user: currentUser, chatList: [message] };
      const newChatData = [...chatData, nextChatItem];
      setChatData(newChatData);
    }
  };

  const toggleCurrentUser = () => {
    setCurrentUser(currentUser.id === 0 ? userList[1] : userList[0]);
  };

  return (
    <StyledContainer>
      <StyledGlobal />
      <Header user={currentUser} onClickImage={toggleCurrentUser} />
      <ChatContainer chatData={chatData} ownerUserId={ownerUser.id} />
      <ChatInput onSendMessage={sendMessage} />
    </StyledContainer>
  );
};
