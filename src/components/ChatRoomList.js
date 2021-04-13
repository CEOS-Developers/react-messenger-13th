import React, { useState, useEffect } from 'react'
import { PlusCircleFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRooms } from '../contexts/RoomsProvider'
import ChatRoomListItem from './ChatRoomListItem'

const StyledChatRoomList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 15px;
  height: 40px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0 15px;
  height: 100%;
  border-radius: 5px;
  background: #E3E3E3;
  font-size: 1em;
  text-align: center;
  flex: 1 1 auto;
  &:focus {
    text-align: left;
  }
`;

const CreateChatButton = styled.button`
  margin: 0 0 0 15px;
  background: #C6D8FC;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 15px;
  height: 100%;
  box-shadow: none;
  font-size: 1.3rem;
  display: flex;
  color: #0E388A;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  & span {
    margin-left: 0.8rem;
    display: none;
  }
  &:hover {
    font-size: 1rem;
  }
  &:hover span {
    display: block;
  }
`;

const ChatRoomListItems = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 0 15px;
  width: 100%;
`;



export default function ChatRoomList() {
  const { rooms, createRoom } = useRooms();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  useEffect(() => {
    setFilteredRooms(() => (rooms.filter(room => room.roomName.toLowerCase().includes(searchQuery.toLowerCase()))))
  }, [rooms, searchQuery])

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleCreateChatButtonClick = () => {
    if(searchQuery !== '' && searchQuery !== null) {
      const query = searchQuery.split(' ');
      let roomName = query[0];
      let participants = [];
      if(query.length > 1) {
        for(let i=1; i<query.length; i++) {
          if(query[i][0]==='@') {
            participants.push(query[i].slice(1));
          } else {
            roomName += ' ' + query[i];
          }
        }
        createRoom(roomName, participants);
        setSearchQuery('');
      }
    }
  }

  return (
    <StyledChatRoomList>
      <Actions>
        <SearchInput 
          type="text" 
          placeholder="채팅방 이름으로 검색..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <CreateChatButton onClick={handleCreateChatButtonClick}>
          <PlusCircleFill /><span>New Room</span>
        </CreateChatButton>
      </Actions>
      <ChatRoomListItems>
        {filteredRooms.map((room, idx) => (
          <Link to={`/room/${room.roomId}`} key={idx}><ChatRoomListItem room={room} /></Link>
        ))}
        {filteredRooms.length === 0 ? 'No rooms.' : ''}
      </ChatRoomListItems>
    </StyledChatRoomList>
  )
}
