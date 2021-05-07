import React, {useState} from 'react';
import { useParams } from 'react-router';
import ChattingHeader from './ChattingHeader';
import ChatContainer from './ChatContainer';
import ChatForm from './ChatForm';
import Navigation from './Navigation';
import UserLists from './UserLists';
import ChattingData from './ChattingData'


const ChattingScreen = () => {
  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState(1)
  const [message,setMessage] = useState(ChattingData);
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
