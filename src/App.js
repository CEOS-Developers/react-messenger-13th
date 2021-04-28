import React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import ChatListPage from './ChatListPage';
import FriendListPage from './FriendListPage';
import SettingPage from './SettingPage';
import styled, { createGlobalStyle } from 'styled-components';
import ChattingPage from './ChattingPage';
import { BsFillPersonFill, BsFillChatFill, BsThreeDots } from 'react-icons/bs';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`;

const AppLayout = styled.ul`
  width: 70px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: fixed;
  height: 550px;
  background-color: #F5F5F5;
  float: left;
`;

const AppContainer = styled.div`
  width: 350px;
  height: 550px;
  border: solid;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: auto;

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  align-items: center;
`;

const StyledLi = styled.li`
  padding: 10px;
`;
export const initialList = [
  { id: 'black', name: '검은색', message: `I'm black`, img: '/img/black.png'},
  { id: 'red', name: '빨간색', message: `I'm Red`, img: '/img/red.png'},
  { id: 'orange', name: '주황색', message: `I'm Orange`, img: 'img/orange.png'},
  { id: 'yellow', name: '노란색', message: `I'm Yellow`, img:'img/yellow.png'},
  { id: 'green', name: '초록색', message: `I'm Green`, img: 'img/green.png'},
  { id: 'blue', name: '파란색', message: `I'm Blue`, img: 'img/blue.png'},
  { id: 'navy', name: '남색', message: `I'm Navy`, img: 'img/navy.png'},
  { id: 'purple', name: '보라색', message: `I'm Purple`, img: 'img/purple.png'},
]

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
     <AppContainer>
        <AppLayout>
          <StyledUl>
            <StyledLi>
              <StyledLink to="/">
                <BsFillPersonFill size="30" />
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/ChatListPage">
                <BsFillChatFill size="25" />
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/SettingPage">
                <BsThreeDots size="30" />
              </StyledLink>
            </StyledLi>
          </StyledUl>
        </AppLayout>
        <div>
          <Switch>
            <Route exact path="/" component={FriendListPage} />
            <Route path={`/ChattingPage/:id`} component={ChattingPage} />
            <Route path="/ChatListPage" component={ChatListPage} />
            <Route path="/SettingPage" component={SettingPage} />
          </Switch>
        </div>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;