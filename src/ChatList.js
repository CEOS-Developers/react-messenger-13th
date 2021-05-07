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
  const { messages } = props;
  // const messages = props.messages
  // props 중에서 messages가 배열인것!

  const containerRef = useRef(null);

  const params = useParams(); // App.js에서 Route path="/room/:id에서 불러온 parameters 중에 id!"

  const list = messages
    .filter((item) => {
      return item.roomId === params.roomId;
    })
    .map((item) => {
      return <ChatItem item={item} />;
    });
  // filter는 조건에 대한 참/거짓을 return하고 참인 원소들로 새로운 배열을 출력한다. 거기에 바로 map 함수를 건 것!

  // function mapItem(item) {
  //     return <ChatItem item={item} />>
  // }

  // const list = messages.map(mapItem);

  // function map(_function) {
  //     return
  // }

  useEffect(
    function () {
      containerRef.current.scrollBy(0, containerRef.current.scrollHeight);
    },
    [messages]
  );
  // useEffect(무엇을, 언제(배열형태가 들어있고 이 배열에 변화가 생길 때 실행된다));
  // 배열안에 함수도 넣을 수 있다

  return <Container ref={containerRef}>{list}</Container>;
}

export default ChatList;
