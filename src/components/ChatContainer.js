import React from 'react'
import styled from 'styled-components'
import ChatMessage from './ChatMessage';

const StyledChatContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;
`;

export default function ChatContainer() {
  return (
    <StyledChatContainer>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage align="right"/>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage align="right"/>
    </StyledChatContainer>
  )
}
