import React, {memo, useState} from 'react';
import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    width: 270px;
    white-space: nowrap;
    align-items: center;
    align-self: flex-end;
`
export const Input = styled.input`
    width: 70vw;
    margin: 10px;
    margin-left: 0px;
    height: 30px;
    border: solid 1px #dcdcdc;
    border-radius: 10%;
`
export const Button = styled.button`
    width: 10vw;
    height: 35px;
    background: yellow;
    border: 0;
    border-radius: 20px;
    margin-right: 5px;
`
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