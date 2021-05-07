import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 60px;
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

  const { roomId } = useParams(); // App.js에서 Route path="/room/:id에서 불러온 parameters 중에 id!"

  function handleChange(e) {
    setInputValue(e.target.value); // inputValue를 e.target.value로 업데이트
  }

  function handleClick() {
    if (inputValue !== '') {
      addChatData(inputValue, roomId);
      setInputValue('');
    }
  }

  function handleKeyPress(e) {
    if (e.code === 'Enter' && !e.isComposing) {
      handleClick();
    }
  }

  return (
    <Container>
      <ChatSendInput
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <SubmitButton onClick={handleClick}>전송</SubmitButton>
    </Container>
  );
}
// value는 원래 html에서 Input이라는 element에 있는 attribute이다.
// 여기서 value는 원래 props인데 styled.component의 기능 중 같은 이름이면 attribute로 처리되는 기능때문에 attribute로 처리된다.
// styledComponent로 HTML attribute와 같은 이름을 가진 props를 넘겨주면, 그걸 자동으로 html attribute로 넘겨준다.

export default ChatInput;
