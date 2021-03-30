import React from 'react';
import styled from 'styled-components';

const StyleChatForm = styled.div`
    display: flex;
    flex-direction: row;
    & div{
        border: 1px solid lightpink;
        border-radius : 30px;
        flex-direction : row;
        width : 100%;
        margin: 10px;
        height : 50px;
        text-align : center;
        font-size: 20px;
        color: pink;
    }
    & button{
        border-radius: 20px;
        background-color: yellow;
        color: grey;
        border: 1px solid grey;
        width: 100px;
        margin : 10px;
        height : 50px;
    }
`;

export default function ChatForm() {
    return (
        <StyleChatForm>
            <div>Message</div>
            <button>전송</button>
        </StyleChatForm>
    );
}