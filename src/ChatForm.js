import React, {useState} from 'react';
import styled from 'styled-components';

const StyleChatForm = styled.div`
    display: flex;
    position: relative;
    & div{
        width: 100%; 
        height: 0%;
        
        bottom: 0;
        flex-direction: row;

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
        color: #f06292;
        border: 1px solid #f06292;
        width: 150px;
        margin : 10px;
        height : 50px;
        position: absolute;
    }
`;



export default function ChatForm({submitMessage, currentUser}) {
    
    const [message, setMessage] = useState('');

    const onChange = (e) =>{
        setMessage(e.target.value);
    }

    const onClick = () =>{
        setMessage('');
        submitMessage(message);
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
            {console.log("This is ChatForm")}
        </StyleChatForm>
    );
}