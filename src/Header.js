import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 15px 15px 15px;
  font-size: 1.4em;
  font-weight: bold;
`;

function Header() {
  return (
    <StyledHeader>
      <Switch>
        <Route path="/friends">친구</Route>
        <Route path="/rooms">채팅</Route>
        <Route path="/settings">설정</Route>
      </Switch>
    </StyledHeader>
  );
}

export default Header;
