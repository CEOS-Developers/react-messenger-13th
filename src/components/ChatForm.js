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
  border-radius: 5px;
  height: 100%;

  &:hover {
    background: #185FBD;
  }

  &.disabled {
    background: #DFDFDF;
    color: #BABABA;
  }
`;

export default function ChatForm({ handleChatSend, activeUser }) {
  const [message, setMessage] = useState('');
  
  /**
   * Event Handler: ChatInput/onChange - set state 'message' when input value changes
   * @param {object} e - InputEvent object triggered by input field value chagne
   */
  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  /**
   * Event Handler: ChatInput/onKeyPress - trigger send when user presses enter key
   * @param {object} e - KeyboardEvent object triggerd by keypress on ChatInput
   */
  const handleKeyPress = (e) => {
    if(e.code === "Enter" && !e.isComposing) {
      handleSend();
    }
  }

  /**
   * Send message containing contens of the input value. Alert when input is emtpy
   */
  const handleSend = () => {
    if(message === '') {
      alert("메세지를 입력 후 전송 버튼을 클릭해주세요.")
    } else {
      handleChatSend(message);
      setMessage('');
    }
  }

  return (
    <StyledChatForm>
      <ChatInput 
        type="text"
        placeholder={ `Send as '${activeUser.name}'...` }
        value={ message }
        onChange={ handleChange }
        onKeyPress = { handleKeyPress }
      />
      <SendChatButton 
        onClick={ handleSend }
        className={ message==='' ? 'disabled' : '' }
      >
        전송
      </SendChatButton>
    </StyledChatForm>
  )
}
