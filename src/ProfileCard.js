import React from 'react';
import styled from 'styled-components';

// region styled-component
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

const StyledImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 30%;
  margin: 10px;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
`;

const StyledLabel = styled.p`
  margin: auto 0;
`;

const StyledLabelName = styled(StyledLabel)`
  margin: auto 0;

  font-weight: bold;
  font-size: 1.05em;
`;
// endregion

const ProfileInfo = (props) => {
  return (
    <StyledLabelContainer>
      <StyledLabelName> {props.name} </StyledLabelName>
      <StyledLabel> {props.status} </StyledLabel>
    </StyledLabelContainer>
  );
};

export default (props) => {
  const user = props.user;
  return (
    <StyledContainer key={props.id}>
      <StyledImg src={user.img} alt="profile" />
      <ProfileInfo name={user.name} status={user.status} />
    </StyledContainer>
  );
};
