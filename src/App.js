import React, {useState} from 'react';
import Header from './Header';
import ChatContainer from './ChatContainer';
import ChatForm from './ChatForm';

const App = () => {
  const [message,setMessage] = useState([
    {
      id: 1,
      text: "Hi",
    },
    {
      id: 2,
      text: "Hello",
    },
  ]);
  const submitMessage = (sendText) => {
    const newMessage = message.concat({
      id: new Date(),
      text: sendText,
    })
    setMessage(newMessage);
  }
  return (
    <div>
      <Header/>
      <ChatContainer message={message}/>
      <ChatForm submitMessage={submitMessage}/>

    </div>
  );
}





export default App;
