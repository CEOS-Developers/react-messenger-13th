import React from 'react';
import UserLists from './UserLists';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 92%;
    height: 170px;
    background: #ffcdd2;
    font-size: 20px;
    color: #330033;
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

function ListHeader(props){
    return(
        <StyledHeader>
        <img src={UserLists[1].img} alt="myImg"/>
        <div>
        <h2>{UserLists[1].name}</h2>
        <input placeholder={props.placeholder} type="text" onChange={props.onChange}/>
        </div>
        </StyledHeader>
    );
}
export default ListHeader;