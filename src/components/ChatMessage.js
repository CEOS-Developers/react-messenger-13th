import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';

const StyledChatMessage = styled.div`
  margin: 0 15px 40px 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &.fromMe {
    flex-direction: row-reverse;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  .fromMe & {
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

const SystemMessage = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
  padding: 5px 25px 5px 25px;
  background: rgba(0,0,0, 0.4);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ChatMessage({ chat, currentUser }) {
  if(chat.type === 'chat') {
    return (
      <StyledChatMessage className={ chat.user.userId === currentUser.userId ? 'fromMe' : '' }>
        <ProfilePicture userId={chat.user.userId} variant="right"/>
        <MessageContainer>
          <UserName>{ chat.user.userName }</UserName>
          <Message>{ chat.content }</Message>
        </MessageContainer>
      </StyledChatMessage>
    )
  } else {
    return (
      <SystemMessage>
        {`${chat.user.userName}님이 ${chat.type === 'enter' ? '대화에 참여했습니다' : ''}${chat.type ==='leave' ? '대화에서 나갔습니다.' : ''}`}
      </SystemMessage>
    )
  }
}
