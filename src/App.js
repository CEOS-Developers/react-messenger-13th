import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Chat from './Chat/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const StyledGlobal = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
  }
`;

export default () => {
  return (
    <Router>
      <StyledGlobal />
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
};
