import React, {useState} from 'react';
import { useParams } from 'react-router';
import ChattingHeader from './ChattingHeader';
import ChatContainer from './ChatContainer';
import ChatForm from './ChatForm';
import Navigation from './Navigation';
import UserLists from './UserID';


const ChattingScreen = () => {
  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState(1)
  const [message,setMessage] = useState([
    {
      id: 1,
      text: "Hi",
      isUser: 0,
      receiver: 0
    },
    {
      id: 2,
      text: "Hello",
      isUser: 1,
      receiver: 0
    },
    {
      id: 3,
      text: "What do you do today?",
      isUser: 1,
      receiver: 0
    },
    {
      id: 4,
      text: "I'm standing on the concert. Would you come? I already left a ticket for you!",
      isUser: 0, 
      receiver: 0
    },
    {
      id: 5,
      text: "Of course!!!! I'm eagerly waiting for it!!",
      isUser: 1,
      receiver: 0
    }
  ]);
  const submitMessage = (sendText) => {
    const newMessage = message.concat({
      id: new Date(),
      text: sendText,
      isUser: currentUser,
      receiver: parseInt(id)
    })
    setMessage(newMessage);
  }
  const users = UserLists;
  const [user,setUsers] = useState(0);  


  function handleClick() {
    if(currentUser === 1){
      setCurrentUser(parseInt(id));
    }
    else{
      setCurrentUser(1);
    }
  }
  return (
    
    <div>
     
      <div onClick={handleClick}>
        <ChattingHeader user={users[currentUser]} />
      </div>
      <Navigation/>
      <ChatContainer message={message.filter( m => m.receiver === parseInt(id))} user={user}/>
     
      <ChatForm submitMessage={submitMessage} {...{currentUser}}/>
    </div>
  );
}

export default ChattingScreen;
