import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';

const StyledActiveUser = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0;
  padding: 5px 20px;
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
  font-size: 1rem;
  color: white;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 0.8rem;
`;

export default function ActiveUser() {
  return (
    <StyledActiveUser>
      <ProfilePicture />
      <UserInfo>
        <UserName>김영우</UserName>
        <UserStatus>지금 활동 중</UserStatus>
      </UserInfo>
    </StyledActiveUser>
  )
}
