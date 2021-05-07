import React from 'react';

export default function RoomList(props) {
  const { initialusers, messages } = props;
  // const initialusers = props.initialusers;
  // const messages = props.messages;

  const list = initialusers
    .filter((user) => {
      return user.id !== 0;
    })
    .map((user, idx) => {
      const messagesWithUser = messages.filter((msg) => {
        return msg.roomId === user.userId;
      });
      // 지금 나와 대화하는 상대의 messages만을 불러오기 위한 문장

      if (messagesWithUser.length === 0) return '';
      // 아직 대화 안 한 상대는 채팅방을 만들지 않게 하기 위한 문장
      return (
        <RoomItem
          key={idx}
          user={user}
          lastMessage={messagesWithUser[messagesWithUser.length - 1].chatText}
        />
      );
    });

  return <div>{list}</div>;
}
