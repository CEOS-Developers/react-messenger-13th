import React, { useState, useRef, useEffect, useCallback } from 'react';
import Top from './Top';
import Chat from './Chat';
import Form from './Form';
import { GlobalStyle } from './styles';
import styled from 'styled-components';
import ChatData from './ChatData.json';
import initialList from './App.js';

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
        switch(match.params.id){
            case 'black':
                setChatting(ChatData.black);
                setUserName('검은애');
                break;
            case 'red':
                setChatting(ChatData.red);
                setUserName('빨간애');
                break;
            case 'orange':
                setChatting(ChatData.orange);
                setUserName('주황애');
                break;
            case 'yellow':
                setChatting(ChatData.yellow);
                setUserName('노란애');
                break;
            case 'green':
                setChatting(ChatData.green);
                setUserName('초록애');
                break;
            case 'blue':
                setChatting(ChatData.blue);
                setUserName('파란애');
                break;
            case 'navy':
                setChatting(ChatData.navy);
                setUserName('남색애');
                break;
            case 'purple':
                setChatting(ChatData.purple);
                setUserName('보라애');
                break;
            default:
                console.log('no case');
        }
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