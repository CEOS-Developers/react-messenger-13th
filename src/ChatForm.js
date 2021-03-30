import React, {useState} from 'react';
import styled from 'styled-components';

const StyleChatForm = styled.div`
    display: flex;
    flex-direction: row;
    & div{
        width: 100%;
    }
    & input{
        border: 1px solid lightpink;
        border-radius : 30px;
        flex-direction : row;
        width : 88%;
        margin: 10px;
        height : 50px;
        text-align : center;
        font-size: 20px;
        color: black;
    }
    & button{
        border-radius: 20px;
        background-color: pink;
        color: grey;
        border: 1px solid grey;
        width: 100px;
        margin : 10px;
        height : 50px;
    }
`;



export default function ChatForm() {
    
    const [message, setMessage] = useState('');

    const onChange = (e) =>{
        setMessage(e.target.value);
    }

    const onClick = () =>{
        setMessage('');
    }

    const onKeyPress = (e) =>{
        if(e.key === 'Enter'){
            setMessage('');
        }
    }
    
    return (
        <StyleChatForm>
            <div>
                <input placeholder="Message" type="text" value={message} onChange={onChange} onKeyPress={onKeyPress}/>
                <button type="submit" onClick={onClick}>전송</button>
            </div>
            
        </StyleChatForm>
    );
}