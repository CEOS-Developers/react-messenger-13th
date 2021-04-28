import React, { useState, useRef, useEffect, useCallback } from 'react';
import Top from './Top';
import Chat from './Chat';
import Form from './Form';
import styled from 'styled-components';
import ChatData from './ChatData.json';
import {initialList} from './App.js';

const ChattingPageContainer = styled.div`
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    height: 550px;
`;

const ChattingPage = ({ match }) => {
    const [isMe, setIsMe] = useState(true);
    const [userName, setUserName] = useState('');
    const [chatting, setChatting] = useState([]);
    
    useEffect(() => {
        setChatting(ChatData[match.params.id]);
        setUserName(initialList.find(e => e.id === match.params.id).name);
    }, []);

    const onClickTop = useCallback(() => {
        setIsMe(!isMe);
    }, [isMe]);
    const upLoadChatting = useCallback((v) => {
        setChatting(v);
    }, [])

    return (
    <ChattingPageContainer>
        <Top isMe={isMe} onClickTop={onClickTop} id={match.params.id} userName={userName}/>
        <Chat chatting={chatting} isMe={isMe} id={match.params.id}/>
        <Form isMe={isMe} upLoadChatting={upLoadChatting} chatting={chatting} />
    </ChattingPageContainer>
    );
}

export default ChattingPage;