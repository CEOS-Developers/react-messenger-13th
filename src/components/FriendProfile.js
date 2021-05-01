import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useContacts } from '../contexts/ContactsProvider';
import { useRooms } from '../contexts/RoomsProvider';

const StyledFriendProfile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2,
  h3,
  p {
    padding: 0;
    margin-top: 0;
  }
  & h2 {
    margin-bottom: 5px;
    font-size: 1.7rem;
  }
  & h3 {
    margin-bottom: 20px;
    font-size: 1.3rem;
    color: #0e388a;
  }
  & p {
    margin-bottom: 12px;
    font-size: 1.1rem;
  }
  & button {
    padding: 10px 15px;
    font-size: 1.1rem;
    border: 1.5px solid #0e388a;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background: #0e388a;
    color: white;
    margin-bottom: 15px;

    &.secondary {
      color: #0e388a;
      background: white;
    }
    &.disabled {
      cursor: auto;
      color: white;
      border-color: lightgray;
      background: lightgray;
    }
    &:first-of-type {
      margin-top: 15px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

const StatusIndicator = styled.div`
  border-radius: 50%;
  position: relative;
  transform: translate(50px, -35px);
  border: 8px solid white;
  width: 45px;
  height: 45px;
  background: lightgray;
  &.active {
    background: #68da66;
  }
`;

export default function FriendProfile() {
  const { id } = useParams();
  const history = useHistory();
  const { getUserById, currentUser } = useContacts();
  const { rooms, createRoom } = useRooms();
  const user = getUserById(id);

  const handleChatWithUserClick = () => {
    let roomAlreadyExists = false;
    let roomId = null;
    for (let i = 0; i < rooms.length; i++) {
      let participants = rooms[i].participants;
      if (participants.length === 2) {
        participants = participants.map(
          (p) => p.userId === user.userId || p.userId === currentUser.userId
        );
        if (participants[0] === true && participants[1] === true) {
          roomAlreadyExists = true;
          roomId = rooms[i].roomId;
          break;
        }
      }
    }
    if (roomAlreadyExists) {
      history.push(`/room/${roomId.toString()}`);
    } else {
      let newRoom = createRoom(`${user.userName}, ${currentUser.userName}`, [
        user.userId,
        currentUser.userId,
      ]);
      if (newRoom !== null) {
        history.push(`/room/${newRoom.toString()}`);
      }
    }
  };

  return (
    <StyledFriendProfile>
      <ProfilePicture
        src={
          process.env.PUBLIC_URL + '/profile-pictures/' + user.userId + '.jpg'
        }
        alt="Profile Picture"
      />
      <StatusIndicator className={user.getCurrentlyActive() ? 'active' : ''} />
      <h2>{user.userName}</h2>
      <h3>{`@${user.userId}`}</h3>
      <p>{`'${user.statusMsg}'`}</p>
      <p>{`마지막 활동: ${user.getLastActiveString()}`}</p>

      {currentUser.userId === user.userId ? (
        <Link to="/settings">
          <button>내 계정 설정</button>
        </Link>
      ) : (
        <button onClick={handleChatWithUserClick}>대화하기</button>
      )}
    </StyledFriendProfile>
  );
}
