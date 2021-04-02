import styled from 'styled-components';
import ChatItem from './ChatItem';
import { useEffect, useRef } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  overflow-y: scroll;
`;

// ChatList = ChatItem 들 다 모아놓은 곳
// ChatItem = 프사+메세지 포함하는 상자

function ChatList(props) {
  const { chatListData } = props;
  // const chatListData = props.chatListData

  const containerRef = useRef(null);

  const list = chatListData.map((item) => {
    return <ChatItem item={item} />;
  });

  // function mapItem(item) {
  //     return <ChatItem item={item} />>
  // }

  // const list = chatListData.map(mapItem);

  // function map(_function) {
  //     return
  // }

  useEffect(
    function () {
      containerRef.current.scrollBy(0, containerRef.current.scrollHeight);
    },
    [chatListData]
  );

  return <Container ref={containerRef}>{list}</Container>;
}

export default ChatList;
