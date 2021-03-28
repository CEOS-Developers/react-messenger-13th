import React, {useState} from 'react';
import styled from 'styled-components';
const StyledHeader = styled.div`
    background-color:pink;
    display : flex;
    flex-direction : row;
    & img {
        margin: 20px;
        width:80px;
        height:80px;
        border-radius : 70%;
    }
`;

const TextPosition = styled.div`
    & h2, h3 {
        margin-left: 20px;
    }
`;



export default function Header() {
    const [handsome, setHandsome] = useState("profile1.jpg");
    const [name, setName] = useState("이소정");
    
    const handleClick = () => {
        if(handsome==="profile1.jpg"){
            setHandsome("profile2.jpg");
            setName("현재");
        }
        else{
            setHandsome("profile1.jpg");
            setName("이소정");
        }
    }
    
    return (
        <StyledHeader onClick={handleClick}>
            <img src={process.env.PUBLIC_URL+handsome} alt="profile"></img>
            <TextPosition>
                <h2>{name}</h2>
                <h3>현재 활동중</h3>
            </TextPosition>
        </StyledHeader>
    );
}