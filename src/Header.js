import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';

const StyledHeader = styled.div`
  margin: 0;
  background: #cccccc;
  flex: 0 0 auto;
`;

export default (props) => {
  return (
    <StyledHeader>
      <ProfileCard user={props.user} />
    </StyledHeader>
  );
};
