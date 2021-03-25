import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  margin: 0;
  background: #8cacc5;
  flex: 0 0 auto;
`;

export default (props) => {
  return (
    <StyledHeader>
      <ProfileCard user={props.user} />
    </StyledHeader>
  );
};
