import React from 'react';
import styled from 'styled-components';
import {RiKakaoTalkFill} from 'react-icons/ri'

const SettingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
`;
const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const H3 = styled.h3`

    padding-left: 10px;
`;
const Ver = styled.div`
    
`;
const Icon = styled.div`
    display: flex;
    justify-content: center;
`;
const Li = styled.li`
    list-style: none;
    padding: 15px;
`;

const SettingPage = () => {

    return (
        <SettingPageContainer>
            <Top>
                <H3>더보기</H3>
                <Ver>ver. 2.6.6</Ver>
            </Top>
            <Icon>
                <RiKakaoTalkFill size="150"/>
            </Icon>
            <ul>
                <Li>새소식</Li>
                <Li>공지사항</Li>
                <Li>환경설정</Li>
                <Li>도움말</Li>
                <Li>카카오톡 정보</Li>
            </ul>
        </SettingPageContainer>
    );
}

export default SettingPage;