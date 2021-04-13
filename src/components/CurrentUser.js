import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';

const StyledCurrentUser = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0;
  padding: 10px 20px;
  background: #144E9A;
  height: 80px;
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: white;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 0.9rem;
`;

export default function CurrentUser({ currentUser, handleCurrentUserClick }) {
  return (
    <StyledCurrentUser onClick={ handleCurrentUserClick }>
      <ProfilePicture userId={ currentUser.userId }/>
      <UserInfo>
        <UserName>{ currentUser.userName }</UserName>
        <UserStatus>{ currentUser.getLastActiveString() }</UserStatus>
      </UserInfo>
    </StyledCurrentUser>
  )
}
