import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
`;

const StyledTextInput = styled.input`
  flex: 1 0 auto;
`;
const StyledSubmitButton = styled.input`
  width: 300px;
  flex: 0 0 auto;
`;

const InputChat = (props) => {
  return <StyledTextInput type="text" />;
};

const SubmitButton = (props) => {
  return <StyledSubmitButton type="submit" />;
};

export default (props) => {
  return (
    <StyledContainer>
      <InputChat />
      <SubmitButton />
    </StyledContainer>
  );
};
