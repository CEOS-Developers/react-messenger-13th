import styled from 'styled-components';

const StyledContainer = styled.footer`
  height: 3.5em;
  position: sticky;
  bottom: 0;

  display: flex;
  flex-direction: row;
  flex: 0 0 auto;

  margin: auto 0 0;
  background: white;
`;

const StyledTextInput = styled.input`
  height: auto;
  flex: 8 0 auto;

  border: 1px solid lightgray;
  border-radius: 100vh;
  outline: none;

  margin: 10px 15px;
  padding: 0 1.1em;
`;

const StyledSubmitButton = styled.input`
  height: auto;

  flex: 0 0 auto;
  background: yellow;
  border: none;
  outline: none;
  color: white;
  padding: 15px;
  align-items: center;
`;

const InputChat = (props) => {
  return <StyledTextInput type="text" />;
};

const SubmitButton = (props) => {
  const imgUrl = `${process.env.PUBLIC_URL}/send.png`;
  return <StyledSubmitButton type="image" src={imgUrl} alt="전송" />;
};

export default (props) => {
  return (
    <StyledContainer>
      <InputChat />
      <SubmitButton />
    </StyledContainer>
  );
};
