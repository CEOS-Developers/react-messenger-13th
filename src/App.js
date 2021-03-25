import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';

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
      const newChatData = Object.assign([], chatData);
      lastChatItem.chatList.push(message);
      setChatData(newChatData);
    } else {
      setChatData(chatData.concat({ user: currentUser, chatList: [message] }));
    }
  };

  return (
    <StyledContainer>
      <Header user={currentUser} />
      <ChatContainer chatData={chatData} ownerUserId={ownerUser.id} />
      <ChatInput onSendMessage={sendMessage} />
    </StyledContainer>
  );
};
