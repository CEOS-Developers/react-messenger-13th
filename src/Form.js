import React, {memo, useState} from 'react';
import { StyledForm, Input, Button } from './styles';

const Form = memo(({ isMe, upLoadChatting, chatting }) => {
    const [text, setText] = useState('');

    const onChangeText = (e) => {
        setText(e.target.value)
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (text==='') {
            alert('type something!!');
            return;
        }
        upLoadChatting([...chatting, {isMe, text}]);
        setText('');
    };

    return(
        <StyledForm onSubmit={onSubmitHandler}>
            <Input placeholder="Message..." value={text} onChange={onChangeText} />
            <Button>전송</Button>
        </StyledForm>
    );
});

export default Form;