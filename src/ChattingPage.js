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
    const scrollRef = useRef(null);
    // const scrollToBottom = () => {
    //     scrollRef.current.scrollIntoView({block: 'end'});
    // }
    
    useEffect(() => {
        setChatting(ChatData[match.params.id]);
        setUserName(initialList.find(e => e.id === match.params.id).name);
    }, []);
    useEffect(() => {
        scrollRef.current.scrollBy(0, scrollRef.current.scrollHeight);
    }, [chatting]);

    const onClickTop = useCallback(() => {
        setIsMe(!isMe);
    }, [isMe]);
    const upLoadChatting = useCallback((v) => {
        setChatting(v);
    }, [])

    return (
    <ChattingPageContainer ref={scrollRef}>
        <Top isMe={isMe} onClickTop={onClickTop} id={match.params.id} userName={userName}/>
        <Chat chatting={chatting} isMe={isMe} id={match.params.id}/>
        <Form isMe={isMe} upLoadChatting={upLoadChatting} chatting={chatting} />
    </ChattingPageContainer>
    );
}

export default ChattingPage;