import React, {useState} from 'react';
import styled from 'styled-components';

const StyleChatForm = styled.div`

    
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;
    & div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 92%;
        height: 0%;
        float: right;
    }
    & input{
        border: 1px solid lightpink;
        border-radius : 30px;
        flex-direction : row;
        float: right;
        width: 100%;
        margin: 10px;
        height : 50px;
        text-align : center;
        font-size: 20px;
        color: black;
    }
    & button{
        border-radius: 20px;
        background-color: pink;
        color: #f06292;
        border: 1px solid #f06292;
        width: 18%;
        margin : 10px;
        height : 50px;
    }
`;



export default function ChatForm({submitMessage, currentUser}) {
    
    const [message, setMessage] = useState('');

    const onChange = (e) =>{
        setMessage(e.target.value);
    }

    const onClick = () =>{
        setMessage('');
        if(!message){
            alert('Type something!');
        }
        else{
        submitMessage(message);
        }
    }

    const onKeyPress = (e) =>{
        if(e.key === 'Enter'){
            setMessage('');
            if(!message){
                alert('Type something!');
            }
            else{
            submitMessage(message);
            }
        }
        
    }
    
    return (
        <StyleChatForm>
            <div>
                <input placeholder="Message" type="text" value={message} onChange={onChange} onKeyPress={onKeyPress}/>
                <button type="submit" onClick={onClick}>Send</button>
            </div>
        </StyleChatForm>
    );
}