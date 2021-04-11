import React, { memo } from 'react';
import { ChatIcon, ChatContainer, WhiteChat, BlackChat, Text } from './styles'

const Chat = memo(({ chatting, id }) => {


    return(
        <ChatContainer>
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