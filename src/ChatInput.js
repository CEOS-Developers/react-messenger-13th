import { useState } from 'react';
import styled from 'styled-components';

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChatSendInput = styled.input`
  flex-grow: 5;
`;

const SubmitButton = styled.button`
  flex-grow: 1;
`;

function ChatInput(props) {
  const [inputValue, setInputValue] = useState('');

  const { addChatData } = props;

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    addChatData(inputValue);
  }

  return (
    <InputBox>
      <ChatSendInput value={inputValue} onChange={handleChange} />
      <SubmitButton onClick={handleClick}>전송</SubmitButton>
    </InputBox>
  );
}

export default ChatInput;
