import React, {useState} from 'react';
import UserLists from './UserLists';
import styled from 'styled-components';
import ListHeader from './ListHeader';

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


function FreindList(){
    const [searchInput, setSearchInput] = useState('');
    const onChange = (e) =>{
        setSearchInput(e.target.value);
    }

    return(
        <div>
        <ListHeader placeholder={"친구 검색"} onChange={onChange}/>
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