import React from 'react'
import styled from 'styled-components'

const StyledChatForm = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background: white;
`;

const ChatInput = styled.input`
  border: none;
  flex-grow: 1;
  height: 100%;
  padding: 1rem;
  margin: 0;
  color: black;
`;

const SendChatButton = styled.button`
  background: #144E9A;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0 0 0 1rem;
  border-radius: 10px;
`;

export default function ChatForm() {
  return (
    <StyledChatForm>
      <ChatInput type="text" placeholder="Enter message here.."/>
      <SendChatButton>전송</SendChatButton>
    </StyledChatForm>
  )
}
