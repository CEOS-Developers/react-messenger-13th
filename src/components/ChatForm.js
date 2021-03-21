import React, { useState } from 'react'
import styled from 'styled-components'

const StyledChatForm = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.5);
`;

const ChatInput = styled.input`
  border: none;
  flex-grow: 1;
  height: 100%;
  padding: 1rem;
  margin: 0;
  color: black;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
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

export default function ChatForm({ handleChatFormSubmit }) {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleKeyPress = (e) => {
    if(e.code === "Enter" && !e.isComposing) {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    if(message === '') {
      alert("메세지를 입력 후 전송 버튼을 클릭해주세요.")
    } else {
      handleChatFormSubmit(message);
      setMessage('');
    }
  }

  return (
    <StyledChatForm>
      <ChatInput 
        type="text"
        placeholder="Enter message"
        value={ message }
        onChange={ handleChange }
        onKeyPress = { handleKeyPress }
      />
      <SendChatButton onClick={ handleSubmit }>전송</SendChatButton>
    </StyledChatForm>
  )
}
