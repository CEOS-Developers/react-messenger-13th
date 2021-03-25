import styled, { css } from 'styled-components';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
  margin: 5px 10px;

  ${(props) =>
    props.isMine &&
    css`
      flex-direction: row-reverse;
    `}
`;

const StyledChatContainer = styled.div`
  max-width: 50%;

  display: flex;
  flex-direction: column;
  margin: auto 0;

  ${(props) =>
    props.isMine &&
    css`
      align-items: flex-end;
    `}
`;

const StyledImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 10px;
`;

const StyledChatItem = styled.p`
  width: fit-content;

  background: white;
  border-radius: 100vh;
  padding: 0.55em 1.1em;

  margin: 4px 0;

  &:first-child {
    ${(props) =>
      props.isMine
        ? css`
            border-top-right-radius: 0;
          `
        : css`
            border-top-left-radius: 0;
          `}
  }

  ${(props) =>
    props.isMine &&
    css`
      background: #fef01b;
    `}
`;

const ChatList = (props) => {
  const list = props.chatList.map((item) => {
    return <StyledChatItem isMine={props.isMine}>{item}</StyledChatItem>;
  });

  return (
    <StyledChatContainer isMine={props.isMine}>{list}</StyledChatContainer>
  );
};

export default (props) => {
  const isMine = props.user.id === 0;
  return (
    <StyledContainer isMine={isMine}>
      <StyledImg src={props.user.img} alt="profile" />
      <ChatList chatList={props.chatList} isMine={isMine} />
    </StyledContainer>
  );
};
