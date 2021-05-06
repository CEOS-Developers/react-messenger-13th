import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background: #ffcdd2;
    display : flex;
    flex-direction : row;
    float: right;
    margin-left: 119px;
    width: 91%;
    position: fixed;
    color: #f06292;
    
    & img {
        margin: 20px;
        width:100px;
        height:100px;
        border-radius : 50%;
    }
`;

const TextPosition = styled.div`
    & h2, h3 {
        margin-left: 20px;
    }
`;

export default function ChattingHeader(props) {
    return (
        <StyledHeader>
            <img src={props.user.img} alt="profile"></img>
            <TextPosition>
                <h2>{props.user.name}</h2>
                <h3>Active Now</h3>
            </TextPosition>
        </StyledHeader>
    );
}