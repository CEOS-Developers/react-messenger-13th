import styled, { createGlobalStyle } from 'styled-components';
import Chat from './Chat/index';
import ChatList from './ChatList/index';
import User from './User/index';
import Setting from './Setting/index';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const StyledGlobal = createGlobalStyle`
  body {
    min-height: 100vh;
    margin: 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  return (
    <Router>
      <StyledGlobal />

      <StyledContainer>
        <Switch>
          <Route
            path={['/', '/user', '/chatList', '/setting']}
            component={Nav}
            exact
          />
        </Switch>

        <Switch>
          <Route path="/chat/:id" component={Chat} />
          <Route path="/user" component={User} />
          <Route path="/chatList" component={ChatList} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </StyledContainer>
    </Router>
  );
};
