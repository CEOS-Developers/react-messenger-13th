import React, {useState} from 'react';
import UserLists from './UserLists.json';
import ListHeader from './ListHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FiSend} from 'react-icons/fi';
import ChattingData from './ChattingData';


const StyledProfileImg = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    & h3 {
        display: flex;
        align-items: center; 
        color: black;
        text-decoration: none;
    }
    & img {
        margin: 20px;
        margin-left: 150px;
        width:80px;
        border-radius : 50%;
        height:80px;
    }
    & h5 {
        color: dimgrey;
        margin-left: 20px;
        margin-top : 50px;
    }
`;


function ChattingList(){
    const [searchInput, setSearchInput] = useState('');
    const onChange = (e) =>{
        setSearchInput(e.target.value);
    }
    
    return(
        <div>
        <ListHeader placeholder={"채팅 목록 검색"} onChange={onChange}/>
        {UserLists.map(id =>{
            if(id.name.includes(searchInput) && id.id!==1){
            return(
            <Link to={`/chatting-screen/${id.id}`}>
            <StyledProfileImg userID = {id.id}>
               <img src={id.img} alt="friendImg"></img>
               <h3>{id.name}<pre> <FiSend></FiSend></pre></h3>
                {ChattingData.map(message => {
                    return(message.receiver===id.id && message.last ?<h5>{message.text}</h5>:<></>)
                })
                }
            </StyledProfileImg>
            </Link>
            );
            }
            
        })}
            
        </div>
    );
}
export default ChattingList;