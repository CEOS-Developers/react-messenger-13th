import React, { memo } from 'react';
import { TopIcon, TopContainer } from './styles';

const Top = memo(({ isMe, onClickTop }) => {


    return (
        <TopContainer onClick={onClickTop}>
            {isMe ? <TopIcon src="/img/logo192.png" alt="image" /> : 
                <TopIcon src="/img/logome.png" alt="image" />}
            <div>
                <ul>{isMe ? '하얀애' : '검은애'}</ul>
                <ul>현재 활동 중</ul>
            </div>
        </TopContainer>
    )
});

export default Top;