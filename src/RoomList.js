import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavigationBar from './NavigationBar';
import RoomItem from './RoomItem';

const StyledRoomList = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const RoomListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
`;

const StyledSearchBar = styled.div`
  padding: 5px 10px;
  width: 100%;
  & input {
    width: 100%;
    border-radius: 3px;
    border: none;
    background: lightgray;
    color: black;
    padding: 10px 10px;
    font-size: 1em;
  }
`;

export default function RoomList(props) {
  const { initialusers, messages } = props;
  // const initialusers = props.initialusers;
  // const messages = props.messages;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(initialusers);

  useEffect(() => {
    setFilteredUsers(() => {
      if (searchQuery === '') {
        return initialusers;
      } else {
        return initialusers.filter((user) => {
          return user.name.includes(searchQuery);
        });
      }
    });
  }, [searchQuery, initialusers]);

  const list = filteredUsers
    .filter((user) => {
      return user.id !== 0;
    })
    .map((user, idx) => {
      const messagesWithUser = messages.filter((msg) => {
        return msg.roomId === user.id;
      });
      // 지금 나와 대화하는 상대의 messages만을 불러오기 위한 문장
      if (messagesWithUser.length === 0) return '';
      // 아직 대화 안 한 상대는 채팅방을 만들지 않게 하기 위한 문장
      return (
        <RoomItem
          key={idx}
          user={user}
          lastMessage={messagesWithUser[messagesWithUser.length - 1].chatText}
        />
      );
    });

  return (
    <StyledRoomList>
      <NavigationBar />
      <RoomListBox>
        <Header />
        <StyledSearchBar>
          <input
            type="text"
            placeholder="검색"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </StyledSearchBar>
        {list}
      </RoomListBox>
    </StyledRoomList>
  );
}
