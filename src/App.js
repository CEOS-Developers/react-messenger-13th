import React, { useState } from 'react';
import Top from './Top';
import Chat from './Chat';
import Form from './Form';
import { StyledForm, StyledTop, StyledChat } from './styles'

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


  const onClickTop = () => {
    setIsMe(!isMe);
  }
  // const upLoadChatting = () => {
  //   setChatting()
  // }
  return (
    <>
    <StyledTop onClick={onClickTop}>
      <Top isMe={isMe}/>
    </StyledTop>
    <StyledChat>
      <Chat chatting={chatting} isMe={isMe} />
    </StyledChat>
    <StyledForm>
      <Form isMe={isMe} upLoadChatting={setChatting} chatting={chatting} />
    </StyledForm>
    </>
  );
}

export default App;
