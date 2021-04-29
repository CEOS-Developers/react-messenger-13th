import React, {useState} from 'react';
import UserLists from './UserID';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledProfileImg = styled.div`
    display: flex;
    flex-direction: row;
    & h3 {
        display: flex;
        align-items: center; 
        color: pink;
        text-decoration: none;
    }
    & img {
        margin: 20px;
        margin-left: 150px;
        width:80px;
        border-radius : 50%;
        height:80px;
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    }
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 92%;
    height: 170px;
    background: linear-gradient(pink, papayawhip);
    font-size: 20px;
    color: dimgrey;
    margin-left: 119px;
    & img {
        margin: 20px;
        width:100px;
        border-radius : 50%;
        border-color: hotpink;
        border-width: 3px;
        height:100px;
        border: 5px solid hotpink;
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
               <h3>{id.name}</h3>
            </StyledProfileImg>
            </Link>
            );
            }
            
        })}
            
        </div>
    );
}
export default ChattingList;