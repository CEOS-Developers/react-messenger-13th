import React, {useEffect} from 'react';
import styled from 'styled-components';
import Message from './Message';


const StyledChatContainer = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100%;
        width: 100%;
        background-size: cover;
        background: beige;
`;



const ChatContainer = ({ message, user }) => {
    
  useEffect(() => {
    console.log("Hello")
    window.scrollBy(0, document.body.scrollHeight);
})
    return(

        <StyledChatContainer>
            {message.map(text_input =>(
                <Message message={text_input} key={text_input.id} user={user}/>
            ))}
            {console.log("This is ChatContainer")}
        </StyledChatContainer>
        
    );
}

export default ChatContainer;