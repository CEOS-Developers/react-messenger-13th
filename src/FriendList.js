import React from 'react';
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

function FriendList() {
  const { FriendListData } = props;

  const list = FriendListData.map((user) => {
    return <FriendItem user={user} />;
  });

  return (
    <Container>
      <NavigationBar></NavigationBar>
      <RightFriendsList>
        <Header></Header>
        <FriendsListBox>{list}</FriendsListBox>
      </RightFriendsList>
    </Container>
  );
}

export default FriendList;
