import React from 'react';
import ChatListPage from './ChatListPage';
import FreindListPage from './FriendListPage';
import SettingPage from './SettingPage';

export const initialList = [
  { name: '검은애', message: `I'm black`, img: '/img/black.png'},
  { name: '빨간애', message: `I'm Red`, img: '/img/red.png'},
  { name: '주황애', message: `I'm Orange`, img: 'img/orange.png'},
  { name: '노란애', message: `I'm Yellow`, img:'img/yellow.png'},
  { name: '초록애', message: `I'm Green`, img: 'img/green.png'},
  { name: '파란애', message: `I'm Blue`, img: 'img/blue.png'},
  { name: '남색애', message: `I'm Navy`, img: 'img/navy.png'},
  { name: '보라애', message: `I'm Purple`, img: 'img/purple.png'},
]

function App() {

  return (
    <>
      <SettingPage />
    </>
  );
}

export default App;
