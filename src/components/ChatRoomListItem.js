import React from 'react';
import styled from 'styled-components';

const StyledChatRoomListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 15px 0;
  margin: 0 0 15px 0;
  border: solid #d6d5d5;
  border-width: 0 0 1px 0;
`;

const RoomIcon = styled.div`
  border-radius: 50%;
  background: gray;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  flex-shrink: 0;
`;

const RoomInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

const RoomInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 0 auto;
  max-width: calc(100% - 80px);
`;

const RoomName = styled.div`
  font-size: 1.3em;
  font-weight: bold;
`;
const LastChatTime = styled.div`
  font-size: 0.8em;
  color: gray;
`;

const LastChat = styled.div`
  font-size: 1em;
  color: gray;
  overflow-wrap: break-word;
`;

export default function ChatRoomListItem({ room }) {
  let lastChat = '';
  if (room.chats[room.chats.length - 1].type === 'chat') {
    lastChat = room.chats[room.chats.length - 1].content;
  } else {
    lastChat = `${room.chats[room.chats.length - 1].user.userName}님이 `;
    switch (room.chats[room.chats.length - 1].type) {
      case 'enter':
        lastChat += '대화에 참여했습니다.';
        break;
      case 'leave':
        lastChat += '대화에서 나갔습니다.';
        break;
      default:
        lastChat += '';
        break;
    }
  }

  return (
    <StyledChatRoomListItem>
      <RoomIcon />
      <RoomInfoColumn>
        <RoomInfoRow>
          <RoomName>{room.roomName}</RoomName>
          <LastChatTime>
            {room.chats[room.chats.length - 1].sentTime.toLocaleTimeString()}
          </LastChatTime>
        </RoomInfoRow>
        <RoomInfoRow>
          <LastChat>{lastChat}</LastChat>
        </RoomInfoRow>
      </RoomInfoColumn>
    </StyledChatRoomListItem>
  );
}
