import styled from 'styled-components';
import { useState } from 'react';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';
import Header from './Header';
import { userList, sampleChat } from '../SampleData';
import { useParams } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 100%;

  background: #9bbbd4;
`;

export default ({ datas }) => {
  const { id } = useParams();

  const data = datas[id];

  const [currentUser, setCurrentUser] = useState(data.userList[0]);
  const [ownerUser, setOwnerUser] = useState(data.userList[0]);
  const [chatData, setChatData] = useState(data.chatList);

  const sendMessage = (message) => {
    if (message === '') {
      alert('빈 텍스트 입니다');
      return;
    }

    const lastChatItem = chatData[chatData.length - 1];
    if (lastChatItem.user.id === currentUser.id) {
      lastChatItem.chat.push(message);
      setChatData([...chatData]);
    } else {
      const nextChatItem = { user: currentUser, chat: [message] };
      const newChatData = [...chatData, nextChatItem];
      setChatData(newChatData);
    }
  };

  const toggleCurrentUser = () => {
    setCurrentUser(currentUser.id === 0 ? userList[1] : userList[0]);
  };

  return (
    <StyledContainer>
      <Header user={currentUser} onClickImage={toggleCurrentUser} />
      <ChatContainer chatData={chatData} ownerUserId={ownerUser.id} />
      <ChatInput onSendMessage={sendMessage} />
    </StyledContainer>
  );
};
