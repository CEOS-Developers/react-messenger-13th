import styled from 'styled-components';
import { useState } from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <StyledContainer>
      <h1>ChatList</h1>
    </StyledContainer>
  );
};
