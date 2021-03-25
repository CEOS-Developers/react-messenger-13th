import styled from 'styled-components';
import Header from './Header';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
];

export default () => {
  return (
    <StyledContainer>
      <Header user={userList[0]} />
      <ChatContainer chatData={sampleChat} />
      <ChatInput />
    </StyledContainer>
  );
};
