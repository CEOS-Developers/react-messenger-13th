import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';

const StyledActiveUser = styled.div`
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

export default function ActiveUser({ activeUser, handleActiveUserClick }) {
  return (
    <StyledActiveUser onClick={ handleActiveUserClick }>
      <ProfilePicture userId={ activeUser.id }/>
      <UserInfo>
        <UserName>{ activeUser.name }</UserName>
        <UserStatus>{ activeUser.status }</UserStatus>
      </UserInfo>
    </StyledActiveUser>
  )
}
