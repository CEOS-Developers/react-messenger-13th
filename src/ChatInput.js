import styled from 'styled-components';

const Title = styled.h1`
    color : green;
    font-size: 1.5em;
    `;

const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    `;

const MessageSendInput = styled.input`
    flex-grow: 5;
    `;

const SubmitButton = styled.button`
    flex-grow: 1;
    
    `;

export default function(props){
    return <InputBox>
        <MessageSendInput/>
        <SubmitButton>전송</SubmitButton>
    </InputBox>
};