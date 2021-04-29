import React, {useState} from 'react';
import UserLists from './UserID';
import styled from 'styled-components';
import UserID from './UserID';


const StyledProfileImg = styled.div`
    display: flex;
    flex-direction: row;
    & h3 {
        display: flex;
        align-items: center;
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
    width: 100%;
    height: 170px;
    background-color: #ffcdd2;
    font-size: 20px;
    & img {
        margin: 20px;
        margin-left: 150px;
        width:100px;
        border-radius : 50%;
        height:100px;
    }
    & input {
        height: 50px;
        width: 1000px;
        border-radius: 10px;
    }
`;

function FreindList(){
    const [searchInput, setSearchInput] = useState('');
    const onChange = (e) =>{
        setSearchInput(e.target.value);
    }
    /*
    const onSearch = () =>{
        UserLists.map(id =>(
            (id.name.includes(searchInput)?
            <StyledProfileImg>
               <img src={id.img} alt="friendImg"></img>
               <h3>{id.name}</h3>
            </StyledProfileImg> : ''
            
        ))
            
    }
    */

    return(
        <div>
        <StyledHeader>
        <img src={UserLists[1].img} alt="myImg"></img>
        <div>
        <h2>{UserLists[1].name}</h2>
        <input placeholder="사용자 검색" type="text" onChange={onChange}/>
        </div>
        </StyledHeader>
        {UserLists.map(id =>{
            if(id.name.includes(searchInput)){
            return(
            <StyledProfileImg>
               <img src={id.img} alt="friendImg"></img>
               <h3>{id.name}</h3>
            </StyledProfileImg>
            );
            }
            
        })}
            
        </div>
    );
}
export default FreindList;