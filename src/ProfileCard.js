import React from 'react';
import styled from 'styled-components';

// region styled-component
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

const StyledLabel = styled.p``;
// endregion

const ProfileInfo = (props) => {
  return (
    <StyledLabelContainer>
      <StyledLabel> {props.name} </StyledLabel>
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
