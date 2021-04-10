import React,{useState} from 'react';
import { BsPersonPlus } from 'react-icons/bs';
import FriendState from './FriendState';
import styled from 'styled-components';

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

const initialList = [
    { name: '검은애', message: `I'm black`, img: '/img/black.png'},
    { name: '빨간애', message: `I'm Red`, img: '/img/red.png'},
    { name: '주황애', message: `I'm Orange`, img: 'img/orange.png'},
    { name: '노란애', message: `I'm Yellow`, img:'img/yellow.png'},
    { name: '초록애', message: `I'm Green`, img: 'img/green.png'},
    { name: '파란애', message: `I'm Blue`, img: 'img/blue.png'},
    { name: '남색애', message: `I'm Navy`, img: 'img/navy.png'},
    { name: '보라애', message: `I'm Purple`, img: 'img/purple.png'},
]

const FriendList = () => {
    const [friendList, setFriendList] = useState(initialList);
    const [text, settext] = useState('');

    const onChangeText = (e) => {
        settext(e.target.value);
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
                return <FriendState props={v}/>;
            } else {
                if (v.name.includes(text)){
                    return <FriendState props={v}/>;
                }
            }
        })}
        </>
    );
}

export default FriendList;