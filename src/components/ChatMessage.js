import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';

const StyledChatMessage = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &.right {
    flex-direction: row-reverse;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  .right & {
    align-items: flex-end;
  }
`;

const UserName = styled.div`
  color: #144E9A;
  margin-bottom: 8px;
`;

const Message = styled.div`
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  max-width: 350px;
`;

export default function ChatMessage({ userName, message, align }) {
  return (
    <StyledChatMessage className={ align }>
      <ProfilePicture />
      <MessageContainer>
        <UserName>{ userName }</UserName>
        <Message>{ message }</Message>
      </MessageContainer>
    </StyledChatMessage>
  )
}
