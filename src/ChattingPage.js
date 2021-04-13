import React, { useState, useRef, useEffect, useCallback } from 'react';
import Top from './Top';
import Chat from './Chat';
import Form from './Form';
import { GlobalStyle } from './styles';
import styled from 'styled-components';
import ChatData from './ChatData.json';
import {initialList} from './App.js';

const ChattingPageContainer = styled.div`
    margin-left: 70px;
`;

const ChattingPage = ({ match }) => {
    const [isMe, setIsMe] = useState(true);
    const [userName, setUserName] = useState('');
    const [chatting, setChatting] = useState([]);
    const scrollRef = useRef();
    const scrollToBottom = () => {
        scrollRef.current.scrollIntoView({block: 'end'});
    }
    
    useEffect(() => {
        setChatting(ChatData[match.params.id]);
        setUserName(initialList.find(e => e.id === match.params.id).name);
    }, []);
    useEffect(() => {
        scrollToBottom();
    }, [chatting]);

    const onClickTop = useCallback(() => {
        setIsMe(!isMe);
    }, [isMe]);
    const upLoadChatting = useCallback((v) => {
        setChatting(v);
    }, [])

    return (
    <ChattingPageContainer ref={scrollRef}>
        {/* <GlobalStyle></GlobalStyle> */}
        <Top isMe={isMe} onClickTop={onClickTop} id={match.params.id} userName={userName}/>
        <Chat chatting={chatting} isMe={isMe} id={match.params.id}/>
        <Form isMe={isMe} upLoadChatting={upLoadChatting} chatting={chatting} />
    </ChattingPageContainer>
    );
}

export default ChattingPage;