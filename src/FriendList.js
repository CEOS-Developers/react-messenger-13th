import React, {useState} from 'react';
import UserLists from './UserID';
import styled from 'styled-components';
import UserID from './UserID';


const StyledProfileImg = styled.div`
    display: flex;
    flex-direction: row;
    
    & img {
        margin: 20px;
        margin-left: 150px;
        width:80px;
        border-radius : 50%;
        height:80px;
    }
    & h5 {
        color: grey;
        margin-left: 20px;
    }
    & a {
        display: flex;
        flex-direction: row;
        align-items: center; 
    }
    & profilemusic {
        height: 30px;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
        border: 2px solid pink;
        border-radius: 7px;
        background-color: white;
        margin-left: auto;
        margin-right: 10px;
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
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

const StyledProfileMusic = styled.div`
    height: 10px;
    width: 30px;
    border: 2px solid pink;
    background-color: white;
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
            if(id.name.includes(searchInput) && id.id!==1){
            return(
            <StyledProfileImg>
               <img src={id.img} alt="friendImg"></img>
               <a>
               <h3>{id.name}</h3>
               <h5>{id.statusMessage}</h5>
               </a>
                {id.profileMusic?
                        <profilemusic>♬ {id.profileMusic}</profilemusic>:<></>
                }
               
            </StyledProfileImg>
            );
            }
            
        })}
            
        </div>
    );
}
export default FreindList;