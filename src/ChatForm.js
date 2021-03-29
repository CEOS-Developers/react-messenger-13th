import React from 'react';
import styled from 'styled-components';

const StyleChatForm = styled.div`
    display: flex;
    flex-direction: row;
    & div{
        border: 1px solid black;
        border-radus : 10px;
        flex-direction : row;
        width : 100%;
        height : 30px;
        margin: 10px;
    }
    & button{
        border-radius: 20px;
        background-color: yellow;
        width: 70px;
        flex-direction : row;
    }
`;

export default function ChatForm() {
    return (
        <StyleChatForm>
            <div></div>
            <button>전송</button>
        </StyleChatForm>
    );
}