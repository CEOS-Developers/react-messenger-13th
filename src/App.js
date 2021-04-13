import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import ChatListPage from './ChatListPage';
import FriendListPage from './FriendListPage';
import SettingPage from './SettingPage';
import styled from 'styled-components';
import ChattingPage from './ChattingPage';

const AppLayout = styled.ul`
  width: 70px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: fixed;
  height: 100%;
  oberflow: auto;
  background-color: #8B6331;
`;

export const initialList = [
  { id: 'black', name: '검은애', message: `I'm black`, img: '/img/black.png'},
  { id: 'red', name: '빨간애', message: `I'm Red`, img: '/img/red.png'},
  { id: 'orange', name: '주황애', message: `I'm Orange`, img: 'img/orange.png'},
  { id: 'yellow', name: '노란애', message: `I'm Yellow`, img:'img/yellow.png'},
  { id: 'green', name: '초록애', message: `I'm Green`, img: 'img/green.png'},
  { id: 'blue', name: '파란애', message: `I'm Blue`, img: 'img/blue.png'},
  { id: 'navy', name: '남색애', message: `I'm Navy`, img: 'img/navy.png'},
  { id: 'purple', name: '보라애', message: `I'm Purple`, img: 'img/purple.png'},
]

function App() {

  return (
    <BrowserRouter>
      <AppLayout>
        <li>
          <Link to="/FriendListPage">친구목록</Link>
        </li>
        <li>
          <Link to="/ChatListPage">채팅목록</Link>
        </li>
        <li>
          <Link to="/SettingPage">설정</Link>
        </li>
      </AppLayout>
      <div>
        <Route path="/FriendListPage" component={FriendListPage} />
        <Route path={`/ChattingPage/:id`} component={ChattingPage} />
        <Route path="/ChatListPage" component={ChatListPage} />
        <Route path="/SettingPage" component={SettingPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;