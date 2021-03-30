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

export default function ChatContainer() {
    return(

        <StyledChatContainer>
            <Message/>
            
        </StyledChatContainer>
        
    );
}