import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router'
import { useContacts } from '../contexts/ContactsProvider';
import { useRooms } from '../contexts/RoomsProvider';
import CurrentUser from './CurrentUser';
import ChatContainer from './ChatContainer'
import ChatForm from './ChatForm'

export default function ChatRoom() {
  const { id } = useParams();
  const { selectedRoom, selectRoom } = useRooms();
  const { currentUser, selectUser } = useContacts();

  useEffect(() => {
    selectRoom(id);
  }, [id, selectRoom])

  /**
   * Change active user when user clicks on header bar
   */
  const handleCurrentUserClick = useCallback(() => {
    const participants = selectedRoom.participants;
    const idx = participants.findIndex(participant => participant.userId === currentUser.userId);
    if(idx < 0 || idx + 1 >= participants.length) {
      selectUser(participants[0].userId);
    } else {
      selectUser(participants[idx+1].userId);
    }
  },[selectedRoom, currentUser, selectUser])

  return (
    selectedRoom!==null ? (
      <>
        <CurrentUser 
          handleCurrentUserClick={handleCurrentUserClick}
          currentUser={currentUser}
        />
        <ChatContainer 
          participants={ selectedRoom.participants } 
          chats={ selectedRoom.chats }
          currentUser={currentUser}
        />
        <ChatForm 
          currentUser={currentUser}
          selectedRoom={selectedRoom}
        />
      </>
    ) : (
      <></>
    )
  )
}
