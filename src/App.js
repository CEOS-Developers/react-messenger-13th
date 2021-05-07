import React, { useState } from 'react';
import styled from 'styled-components';

import ProfileContainer from './ProfileContainer';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import FriendList from './FriendList';
import RoomList from './RoomList';
import Settings from './Settings';

const initialChatData = [
  {
    chatId: 1,
    chatText: '미션 다햇니',
    userId: 1,
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
    roomId: 1,
  },
  {
    chatId: 2,
    chatText: '아니ㅎㅎ',
    userId: 1,
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
    roomId: 1,
  },
];

const initialusers = [
  {
    id: 0,
    name: '정윤선',
    profileImgSrc: process.env.PUBLIC_URL + '/myphoto.jpg',
  },
  {
    id: 1,
    name: '김선종',
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
  },
  {
    id: 2,
    name: '김영우',
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
  },
  {
    id: 3,
    name: '박예진',
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
  },
  {
    id: 4,
    name: '안건희',
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
  },
  {
    id: 5,
    name: '이소정',
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
  },
  {
    id: 6,
    name: '이승범',
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
  },
  {
    id: 7,
    name: '이호연',
    profileImgSrc: process.env.PUBLIC_URL + '/babodog.jpg',
  },
];

function App() {
  const [messages, setMessages] = useState(initialChatData);
  const [rooms, setRooms] = useState([]);
  const [currentUser, setCurrentUser] = useState(initialusers[0]);

  function toggleCurrentUser(roomId) {
    if (currentUser === initialusers[0]) {
      setCurrentUser(initialusers[roomId]);
    } else {
      setCurrentUser(initialusers[0]);
    }
  }

  function addChatData(message, roomId) {
    setMessages(
      messages.concat([
        {
          chatId: messages.length,
          chatText: message,
          userId: currentUser.id,
          profileImgSrc: currentUser.profileImgSrc,
          roomId: roomId,
        },
      ])
    );
  }

  // function createRoom(friendId) {
  //   setRooms((prevRooms) => {
  //     let newRooms = prevRooms;
  //     newRooms.push({
  //       roomId: rooms.length,
  //       participants: [friendId, currentUser.id],
  //     });
  //     return newRooms;
  //   });
  // }

  return (
    <BrowserRouter>
      <Container>
        <ul>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/friends">
            <FriendList FriendListData={initialusers} />
          </Route>{' '}
          {/* 이부분은 사용자에게 보이는 주소창에 들어가는 부분! */}
          <Route path="/rooms">
            <RoomList initialusers={initialusers} messages={messages} />
          </Route>
          <Route path="/room/:roomId">
            {' '}
            {/* :id 는 유저가 주소창에 입력한 값을 불러오는 곳이다
             (줌 방 번호같은 느낌)
             만약 여러개의 parameter 를 만들고 싶으면
             /:id/:melon/:peach 이런식으루 쓰면 된다!} */}
            <ProfileContainer
              currentUser={currentUser}
              toggleCurrentUser={toggleCurrentUser}
            />
            <ChatList messages={messages} />
            <ChatInput addChatData={addChatData} />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            {/* 만약 이걸 제일 처음에 넣고 싶으면
             exact path="/" 라고 넣어주면 된다! */}
            {/* Switch가 없으면 루트에 일치하는 모든 것들을
             불러오지만 Switch를 넣으면 일치하는 첫번째 루트만
             불러온다. 따라서 Switch가 없으면 /를 마지막에 넣어도
             소용이 없다. */}
            <Redirect to="/friends" />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
