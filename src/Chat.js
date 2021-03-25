import React from 'react';
import { ChatIcon, ChatContainer, WhiteChat, BlackChat, Text } from './styles'

const Chat = ({ chatting }) => {


    return(
        <ChatContainer>
            {chatting.map((v,i) => {
                return v.isMe ? 
                <WhiteChat key={i}>
                    <Text>
                        {v.text}
                    </Text>
                    <ChatIcon src="/img/logo192.png" alt="img" />
                </WhiteChat>
                :
                <BlackChat key={i}>
                    <ChatIcon src="/img/logome.png" alt="img" />
                    <Text>
                        {v.text}
                    </Text>
                </BlackChat>
            })}
        </ChatContainer>
    );
}

export default Chat;