import React,{useState} from 'react';
import { initialList } from './App';
import styled from 'styled-components';
import {IoIosText} from 'react-icons/io';
import FriendState from './FriendState';
import {Link} from 'react-router-dom';

const ChatListPageContainer = styled.div`
    margin-left: 70px;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const H3 = styled.h3`
    padding-left: 10px;
`;
const Icon = styled.div`
    padding-right: 10px;
`;

const Input = styled.input`
    width: 98%;
    margin: 10px;
    margin-left: 0px;
    height: 30px;
    border: solid 1px #dcdcdc;
    border-radius: 10%;
    display: block;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


const ChatListPage = () => {
    const friendList = initialList;
    const [text, setText] = useState('');

    const onChangeText = (e) => {
        setText(e.target.value);
    }

    return(
        <ChatListPageContainer>
            <Top>
                <H3>채팅</H3>
                <Icon>
                    <IoIosText size="24" padding-right="10"/>
                </Icon>
            </Top>
            <Input placeholder=" 채팅방, 참여자 검색" value={text} onChange={onChangeText} />
            {friendList.map((v) => {
                if (text === ''){
                    return (
                        <StyledLink to={`/ChattingPage/${v.id}`}>
                            <FriendState props={v} where={'ChatList'}/>
                        </StyledLink>
                    );
                } else {
                    if (v.name.includes(text)){
                        return (
                            <Link to={`/ChattingPage/${v.id}`}>
                                <FriendState props={v} where={'ChatList'}/>
                            </Link>
                        );
                    }
                }
            })}
        </ChatListPageContainer>
    );
}

export default ChatListPage;