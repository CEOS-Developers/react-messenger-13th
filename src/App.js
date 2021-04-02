import React, {useState} from 'react';
import Header from './Header';
import ChatContainer from './ChatContainer';
import ChatForm from './ChatForm';

const App = () => {
  const [currentUser, setCurrentUser] = useState(1)
  const [message,setMessage] = useState([
    {
      id: 1,
      text: "Hi",
      isUser: 0
    },
    {
      id: 2,
      text: "Hello",
      isUser: 1
    },
    {
      id: 3,
      text: "What do you do today?",
      isUser: 1
    },
    {
      id: 4,
      text: "I'm standing on the concert. Would you come? I already left a ticket for you!",
      isUser: 0
    },
    {
      id: 5,
      text: "Of course!!!! I'm eagerly waiting for it!!",
      isUser: 1
    },
  ]);
  const submitMessage = (sendText) => {
    const newMessage = message.concat({
      id: new Date(),
      text: sendText,
      isUser: currentUser
    })
    setMessage(newMessage);
  }
  const users = [
  {
    id: 0,
    name: "THE BOYZ",
    img: "profile2.jpg",
  },
  {
    id: 1,
    name: "KATHERINE",
    img: "profile1.jpg",
  },
  ];
  const [user,setUsers] = useState(users[0]);  


  function handleClick() {
    console.log('click');
    if(currentUser === 0){
      setCurrentUser(1);
      console.log("jerer")
    }
    else{
      setCurrentUser(0);
    }
  }
  return (
    <div>
      <div onClick={handleClick}>
        <Header user={users[currentUser]} />
      </div>
      
      <ChatContainer message={message} user={user}/>
     
      <ChatForm submitMessage={submitMessage} {...{currentUser}}/>
    </div>
  );
}

export default App;
