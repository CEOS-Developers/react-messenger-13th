import React from 'react';
import {IoLogoInstagram} from 'react-icons/io';
import styled from 'styled-components';

const StyledLogo = styled.div`
    font-size: 100px;
    margin-left: 100px;
    padding-top: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    & h3 {
    background: linear-gradient(darkviolet, deeppink, #fda742) !important;
    font-size: 100px;
    -webkit-background-clip: text !important;
    color: transparent;
    cursor: pointer;
    }
`;

function Home(){
    return(
    <StyledLogo>
        
        <IoLogoInstagram>
        </IoLogoInstagram>
        <h3>Jungstagram</h3>
        
        
    </StyledLogo>
    );
}
export default Home;