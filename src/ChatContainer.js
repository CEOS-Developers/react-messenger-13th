import React, {useEffect} from 'react';
import styled from 'styled-components';
import Message from './Message';


const StyledChatContainer = styled.div`
        display: flex;
        flex-direction: column;
        
        height: 100%;
        width: 100%;
        padding-top: 150px;
        padding-bottom: 70px;
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