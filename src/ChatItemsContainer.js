import styled, { css } from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;

  ${(props) =>
    props.isMine &&
    css`
      flex-direction: row-reverse;
    `}
`;

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px;
`;

const StyledChatItem = styled.p``;

const ChatList = (props) => {
  const list = props.chatList.map((item) => {
    return <StyledChatItem>{item}</StyledChatItem>;
  });

  return <StyledChatContainer>{list}</StyledChatContainer>;
};

export default (props) => {
  const isMine = props.user.id === 0;
  return (
    <StyledContainer isMine={isMine}>
      <StyledImg src={props.user.img} alt="profile" />
      <ChatList chatList={props.chatList} />
    </StyledContainer>
  );
};
