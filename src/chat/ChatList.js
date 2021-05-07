import styled from 'styled-components';
import MessageItem from './MessageItem';
import { useEffect, useRef } from 'react';
import {chatData} from '../Data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  width: 100%;
  top: 120px;
  bottom: 70px;
  background-image: url('./heart_bg.png');
`;

export default function ChatList(props) {
  
  const containerRef = useRef(null);
  const list = props.chatData.chatText.map((item) => {
    return <MessageItem chatItem={item} />;
  });

  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
  }, [list]);

  return <Container ref={containerRef}>{list}</Container>;
}
// export default function ChatList(props) {
//   const { chatData } = props;
//   const containerRef = useRef(null);
//   const list = chatData.map((item) => {
//     return <MessageItem chatItem={item} />;
//   });

//   useEffect(() => {
//     containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
//   }, [list]);

//   return <Container ref={containerRef}>{list}</Container>;
// }

