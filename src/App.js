import styled, { createGlobalStyle } from 'styled-components';
import ChatList from './ChatList/index';
import User from './User/index';
import Setting from './Setting/index';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { sampleChatList, sampleUserList } from './SampleData';
import { useState } from 'react';

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
  const [chatList, setChatList] = useState(sampleChatList);
  const [userList, setUserList] = useState(sampleUserList);

  return (
    <Router>
      <StyledGlobal />

      <StyledContainer>
        <Switch>
          <Route
            path={['/', '/user', '/chat', '/setting']}
            component={Nav}
            exact
          />
        </Switch>

        <Switch>
          <Route
            path="/user"
            render={(props) => <User {...props} userList={userList} />}
          />
          <Route
            path="/chat"
            render={(props) => <ChatList {...props} chatList={chatList} />}
          />
          <Route path="/setting" component={Setting} />
        </Switch>
      </StyledContainer>
    </Router>
  );
};
