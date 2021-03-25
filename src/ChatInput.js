import styled from 'styled-components';

const StyledContainer = styled.footer`
  position: sticky;
  bottom: 0;

  display: flex;
  flex-direction: row;
  flex: 0 0 auto;

  margin-top: auto;
  padding: 10px;

  background: white;
`;

const StyledTextInput = styled.input`
  flex: 8 0 auto;

  border: 1px solid lightgray;
  border-radius: 100vh;
  outline: none;

  padding-left: 1em;

  &:focus {
  }
`;
const StyledSubmitButton = styled.input`
  height: 3em;
  flex: 1 0 auto;
  background: cornflowerblue;
  border: none;
  border-radius: 100vh;
  margin-left: 15px;
  outline: none;
  color: white;
`;

const InputChat = (props) => {
  return <StyledTextInput type="text" />;
};

const SubmitButton = (props) => {
  return <StyledSubmitButton type="submit" value="전송" />;
};

export default (props) => {
  return (
    <StyledContainer>
      <InputChat />
      <SubmitButton />
    </StyledContainer>
  );
};
