import React from 'react';
import { TopIcon, TopContainer } from './styles';

const Top = ({ isMe }) => {


    return (
        <>
        <TopContainer>
            {isMe ? <TopIcon src="/img/logo192.png" alt="image" /> : 
                <TopIcon src="/img/logome.png" alt="image" />}
            <div>
                <ul>검은색</ul>
                <ul>현재 활동 중</ul>
            </div>
        </TopContainer>
        </>
    )
};

export default Top;