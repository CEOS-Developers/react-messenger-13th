import React, {useState} from 'react';
import UserLists from './UserID';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FiSend} from 'react-icons/fi';


const StyledProfileImg = styled.div`
    display: flex;
    flex-direction: row;
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
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 92%;
    height: 170px;
    background: linear-gradient(pink, papayawhip);
    font-size: 20px;
    color: #f06292;
    margin-left: 119px;
    & img {
        width:100px;
        height:100px;
        background: 
        linear-gradient(ghostwhite, ghostwhite) padding-box,
        linear-gradient(to bottom, #e600ac, #ffa31a) border-box;
        border: 5.5px solid transparent;
        border-radius:100px;
        display:inline-block;
        margin: 20px; 
        padding : 3px;
    }
    & input {
        height: 50px;
        width: 1000px;
        border-radius: 10px;
        border: 1px solid #ffcdd2;
    }
    
`;

function ChattingList(){
    const [searchInput, setSearchInput] = useState('');
    const onChange = (e) =>{
        setSearchInput(e.target.value);
    }
    
    return(
        <div>
        <StyledHeader>
        
        
        <img src={UserLists[1].img} alt="myImg"></img>
       
        
        <div>
        <h2>{UserLists[1].name}</h2>
        <input placeholder="채팅 목록 검색" type="text" onChange={onChange}/>
        </div>
        </StyledHeader>
        {UserLists.map(id =>{
            if(id.name.includes(searchInput) && id.id!==1){
            return(
            <Link to={`/chatting-screen/${id.id}`}>
            <StyledProfileImg userID = {id.id}>
               <img src={id.img} alt="friendImg"></img>
               <h3>{id.name}<pre>  <FiSend></FiSend></pre></h3>
               
            </StyledProfileImg>
            </Link>
            );
            }
            
        })}
            
        </div>
    );
}
export default ChattingList;