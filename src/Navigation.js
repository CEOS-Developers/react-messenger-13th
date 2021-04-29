import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FiSend} from 'react-icons/fi';
import {BsFillPeopleFill} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs';
const StyledNavigationBar = styled.div`
position: fixed;
left: 10px;
display: flex;
flex-direction: row;
background: snow;
padding: 10px 20px 10px;
box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
border-radius: 5px;
height: 100%;
width: 70px;
font-size: 60px;
color: #ffcdd2;
`;

function Navigation() {
    return(
        <StyledNavigationBar>
        <div className="nav">
            <Link to="/">
                <BsFillPeopleFill></BsFillPeopleFill>
            </Link><br></br>
            <Link to="/chatting-list">
                <FiSend></FiSend>
            </Link><br></br>
            <Link to="/setting-page">
                <BsThreeDots></BsThreeDots>
            </Link><br></br>
        </div>
        </StyledNavigationBar>
    );
}

export default Navigation;
