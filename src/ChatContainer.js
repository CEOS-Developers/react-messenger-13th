import React from 'react';
import styled from 'styled-components';
import Message from './Message';


const StyledChatContainer = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: lightgrey;
        height: 700px;
`;

const ChatContainer = ({ message }) => {
    return(

        <StyledChatContainer>
            {message.map(text_input =>(
                <Message message={text_input} key={text_input.id}/>
            ))}
        </StyledChatContainer>
        
    );
}

export default ChatContainer;