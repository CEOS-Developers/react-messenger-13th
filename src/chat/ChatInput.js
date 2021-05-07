import styled from 'styled-components';
import React from 'react';

const Box = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;
    width: 100%;
    bottom: 0px;
    position: fixed;
    background-color: rgb(237, 232, 234);
`;
const Input = styled.input`
    height: 50px;
    border-radius: 30px;
    margin-left: 5%;
    flex-grow: 5;
    border: 1px solid rgb(204, 194, 180);
    :focus{
        border:  1px solid rgb(204, 194, 180);;
        outline: none;
    }
`;

const Button = styled.button`
    height: 50px;
    flex-grow: 1;
    margin-left: 10px;
    margin-right: 5%;
    border-radius: 30px;
    background-color: rgb(222, 189, 164);
    border: none;
    :focus{
        border: none;
        outline: none;
    }
`;

export default function ChatInput(props){
    const {message,handleSubmit,handleChangeInput} = props;
    return(
        <Box onSubmit = {handleSubmit}>
            <Input
                type="text"
                value={message}
                placeholder = ' Please enter a message'
                onChange = {handleChangeInput}
            />
            <Button type="submit">전송</Button>
        </Box>
    )
}
