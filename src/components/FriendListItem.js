import React from 'react'
import ProfilePicture from './ProfilePicture'
import styled from 'styled-components'

const StyledFriendListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 25px 15px 25px;
  margin: 0;
  border: solid #D6D5D5;
  border-width: 1px 0 1px 0;
  padding-top: 15px;
`;

// const ProfilePicture = styled.div`
//   border-radius: 50%;
//   background: gray;
//   width: 60px;
//   height: 60px;
//   flex-shrink: 0;
// `;

const StatusIndicator = styled.div`
  border-radius: 50%;
  position: relative;
  transform: translate(-20px, 42px);
  border: 4px solid white;
  width: 26px;
  height: 26px;
  background: lightgray;
  &.active {
    background: #68DA66;
  }
`;

const UserInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

const UserInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 0 auto;
  max-width: calc(100% - 80px);
`;

const UserName = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`;
const LastActive = styled.div`
  font-size: 0.8em;
  color: gray;
`;

const StatusMessage = styled.div`
  font-size: 1em;
  color: gray;
  overflow-wrap: break-word;
`;

export default function FriendListItem({ user }) {
  return (
    <StyledFriendListItem>
      <ProfilePicture userId={user.userId} variant="large" />
      <StatusIndicator className={user.getCurrentlyActive() ? 'active' : ''}/>
      <UserInfoColumn>
        <UserInfoRow>
          <UserName>{user.userName}</UserName>
          <LastActive>{user.getLastActiveString()}</LastActive>
        </UserInfoRow>
        <UserInfoRow>
          <StatusMessage>{`@${user.userId}${user.statusMsg==='' ? '' : ` - ${user.statusMsg}`}`}</StatusMessage>
        </UserInfoRow>
      </UserInfoColumn>
    </StyledFriendListItem>
  )
}
