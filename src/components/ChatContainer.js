import React, { useEffect, useRef } from 'react'
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

export default function ChatContainer({ participants, messages }) {
  const chatContainerRef = useRef(null);

  useEffect(()=> {
    chatContainerRef.current.scrollBy(0, chatContainerRef.current.scrollHeight);
  }, [messages])

  const chatMessages = messages.map((message, idx) => 
    <ChatMessage 
      user={ participants[message.id] }
      message={ message.msg }
      align={ message.id === 0 ? '' : 'right' }
      key={ idx }
    />
  );

  return (
    <StyledChatContainer ref={ chatContainerRef }>
      { chatMessages }
    </StyledChatContainer>
  )
}
