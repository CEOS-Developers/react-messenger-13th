import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';

const StyledChatContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 0;
  overflow-y: auto;
`;

export default function ChatContainer({ chats, currentUser }) {
  // Ref to access chatcontainer (div)
  const chatContainerRef = useRef(null);

  // Scroll div to bottom when new message arrives
  useEffect(() => {
    chatContainerRef.current.scrollBy(0, chatContainerRef.current.scrollHeight);
  }, [chats]);

  // Create ChatMessage component for every 'message' in 'messages'
  let chatMessages = '';
  if (chats) {
    chatMessages = chats.map((chat, idx) => {
      return <ChatMessage chat={chat} key={idx} currentUser={currentUser} />;
    });
  }

  return (
    <StyledChatContainer ref={chatContainerRef}>
      {chatMessages}
    </StyledChatContainer>
  );
}
