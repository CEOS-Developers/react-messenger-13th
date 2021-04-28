import React, { memo } from 'react';
import styled from "styled-components";

export const TopContainer = styled.div`
    background: #dcdcdc;
    display: flex;
    align-items: center;
    padding-left: 15px;
    height: 80px;
    width: 265px;
    border-bottom: solid 1px;
`;

export const TopIcon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 40%;
`;

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