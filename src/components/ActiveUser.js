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
  // const [userStatus, setUserStatus] = useState(() => {
  //   if (activeUser.lastActive === 'now') {
  //     return '지금 활동 중';
  //   } else {
  //     return '활동 중이 아님';
  //   }
  // })
  let userStatus = '';
  if (activeUser.lastActive === 'now') {
    userStatus = '지금 활동 중'
  } else {
    userStatus = '활동 중이 아님'
  }

  return (
    <StyledActiveUser onClick={handleActiveUserClick}>
      <ProfilePicture userId={activeUser.id}/>
      <UserInfo>
        <UserName>{activeUser.name}</UserName>
        <UserStatus>{userStatus}</UserStatus>
      </UserInfo>
    </StyledActiveUser>
  )
}
