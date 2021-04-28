import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 415px;
    overflow-y: scroll;
`
export const BlackChat = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    padding: 5px;
    div {
        border: solid 1px #dcdcdc;
    }
`
export const WhiteChat = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: center;
    padding: 5px;
    div {
        background-color: #FFFA78;
        border: ;
    }
`
export const Text = styled.div`
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
`
export const ChatIcon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const Chat = memo(({ chatting, id }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current.scrollBy(0, scrollRef.current.scrollHeight);
    }, [chatting]);

    return(
        <ChatContainer ref={scrollRef}>
            {chatting.map((v,i) => {
                return v.isMe ? 
                <WhiteChat key={i}>
                    <Text>
                        {v.text}
                    </Text>
                    <ChatIcon src="/img/white.png" alt="img" />
                </WhiteChat>
                :
                <BlackChat key={i}>
                    <ChatIcon src={`/img/${id}.png`} alt="img" />
                    <Text>
                        {v.text}
                    </Text>
                </BlackChat>
            })}
        </ChatContainer>
    );
});

export default Chat;