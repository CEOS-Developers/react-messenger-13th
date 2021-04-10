import React,{useState} from 'react';
import { BsPersonPlus } from 'react-icons/bs';
import FriendState from './FriendState';
import styled from 'styled-components';
import {initialList} from './App';

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



const FriendListPage = () => {
    const [friendList, setFriendList] = useState(initialList);
    const [text, setText] = useState('');

    const onChangeText = (e) => {
        setText(e.target.value);
    }

    return(
        <>
        <Top>
            <H3>친구 {friendList.length}</H3>
            <Icon>
            <BsPersonPlus size="24" padding-right="10"/>
            </Icon>
        </Top>
        <Input placeholder=" 이름 검색" value={text} onChange={onChangeText} />
        {friendList.map((v) => {
            if (text === ''){
                return <FriendState props={v} where={'FriendList'}/>;
            } else {
                if (v.name.includes(text)){
                    return <FriendState props={v} where={'FriendList'}/>;
                }
            }
        })}
        </>
    );
}

export default FriendListPage;