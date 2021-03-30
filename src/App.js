import React, { useState, useRef, useEffect, useCallback } from 'react';
import Top from './Top';
import Chat from './Chat';
import Form from './Form';
import { GlobalStyle } from './styles';

const initialChat = [
  {isMe: false, text: 'hey wassup You to party tonight?'},
  {isMe: true, text: 'I wanna go, but nah'},
  {isMe: false, text: 'Why? I heard they prepared a lot. It must be cool'},
  {isMe: true, text: 'My professor just uploaded a new assignment, and the due is tomorrow'},
  {isMe: false, text: 'yikes'},
]

function App() {
  const [isMe, setIsMe] = useState(true);
  const [chatting, setChatting] = useState(initialChat);
  const scrollRef = useRef();

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({block: 'end'});
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatting]);

  const onClickTop = useCallback(() => {
    setIsMe(!isMe);
  }, [isMe]);
  const upLoadChatting = useCallback((v) => {
    setChatting(v);
  }, [])
  return (
    <div ref={scrollRef}>
      <GlobalStyle></GlobalStyle>
      <Top isMe={isMe} onClickTop={onClickTop}/>
      <Chat chatting={chatting} isMe={isMe} />
      <Form isMe={isMe} upLoadChatting={upLoadChatting} chatting={chatting} />
    </div>
  );
}

export default App;
