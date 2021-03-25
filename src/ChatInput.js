import { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.form`
  height: 3.5em;
  position: sticky;
  bottom: 0;

  display: flex;
  flex-direction: row;
  flex: 0 0 auto;

  margin: auto 0 0;
  background: white;
`;

const StyledTextInput = styled.input.attrs({
  type: 'text',
})`
  height: auto;
  flex: 8 0 auto;

  border: 1px solid lightgray;
  border-radius: 100vh;
  outline: none;

  margin: 10px 15px;
  padding: 0 1.1em;
`;

const StyledSubmitButton = styled.input.attrs({
  type: 'image',
})`
  height: auto;

  flex: 0 0 auto;
  background: yellow;
  border: none;
  outline: none;
  color: white;
  padding: 15px;
  align-items: center;
`;

const SubmitButton = (props) => {
  const imgUrl = `${process.env.PUBLIC_URL}/send.png`;
  return <StyledSubmitButton src={imgUrl} alt="전송" />;
};

export default (props) => {
  const [messageText, setMessageText] = useState('');

  const onTextChanged = (event) => {
    setMessageText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSendMessage(messageText);
    setMessageText('');
  };

  return (
    <StyledContainer onSubmit={onSubmit}>
      <StyledTextInput value={messageText} onChange={onTextChanged} />
      <SubmitButton />
    </StyledContainer>
  );
};
