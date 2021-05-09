import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavigationBar from './NavigationBar';
import FriendItem from './FriendItem';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const RightFriendsList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
`;

const FriendsListBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
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

function FriendList(props) {
  const { FriendListData } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFriendList, setFilteredFriendList] = useState(FriendListData);

  useEffect(() => {
    setFilteredFriendList(() => {
      if (searchQuery === '') {
        return FriendListData;
      } else {
        return FriendListData.filter((user) => {
          return user.name.includes(searchQuery);
        });
      }
    });
  }, [searchQuery, FriendListData]);

  const list = filteredFriendList.map((user) => {
    return <FriendItem user={user} />;
  });

  return (
    <Container>
      <NavigationBar></NavigationBar>
      <RightFriendsList>
        <Header></Header>
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
        <FriendsListBox>{list}</FriendsListBox>
      </RightFriendsList>
    </Container>
  );
}

export default FriendList;
