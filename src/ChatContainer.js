import React from 'react';
import styled from 'styled-components';

const StyledChatContainer = styled.div`
    & img{
        margin: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;
export default function ChatContainer() {
    return(

        <StyledChatContainer>
            <img src={process.env.PUBLIC_URL+"profile2.jpg"} alt="profile"></img>
        </StyledChatContainer>
        
    );
}