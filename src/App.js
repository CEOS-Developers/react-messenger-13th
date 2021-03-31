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
  const users = [
  {
    id: 0,
    name: "이소정",
    img: "profile1.jpg",
  },
  {
    id: 1,
    name: "현재",
    img: "profile2.jpg",
  },
  ];
  const [user,setUsers] = useState(users[0]);
  function handleClick() {
    console.log('click');
    if(user.id === 0){
      setUsers(users[1]);
    }
    else{
      setUsers(users[0]);
    }
  }
  return (
    <div>
      <div onClick={handleClick}>
        <Header user={user} />
      </div>
      <ChatContainer message={message}/>
      <ChatForm submitMessage={submitMessage}/>

    </div>
  );
}





export default App;
