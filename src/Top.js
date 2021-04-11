import React, { memo } from 'react';
import { TopIcon, TopContainer } from './styles';

const Top = memo(({ isMe, onClickTop, id, userName }) => {
    return (
        <TopContainer onClick={onClickTop}>
            {isMe ? <TopIcon src="/img/white.png" alt="image" /> : 
                <TopIcon src={`/img/${id}.png`} alt="image" />}
            <div>
                <ul>{isMe ? '하얀애' : userName}</ul>
                <ul>현재 활동 중</ul>
            </div>
        </TopContainer>
    )
});

export default Top;