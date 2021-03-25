import React, {useState} from 'react';
import { StyledForm } from './styles';

const Form = ({ isMe, upLoadChatting, chatting }) => {
    const [text, setText] = useState('');

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (text==='') {
            alert('type something!!')
            return;
        }
        upLoadChatting([...chatting, {isMe, text}])
        setText('');
    }

    return(
        <StyledForm onSubmit={onSubmitHandler}>
            <input placeholder="Message..." value={text} onChange={onChangeText} />
            <button>전송</button>
        </StyledForm>
    );
}

export default Form;