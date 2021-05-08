import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProfileImage = styled.img`
  width: 70px;
  height: 70px;
`;
const StyledText = styled.p`
  margin: 5px 0;
`;

export default ({ user }) => {
  return (
    <StyledContainer>
      <StyledProfileImage src={user.img} />
      <StyledLabelContainer>
        <StyledText>{user.name}</StyledText>
      </StyledLabelContainer>
    </StyledContainer>
  );
};
