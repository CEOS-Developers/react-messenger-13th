import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FiSend} from 'react-icons/fi';
import {BsFillPeopleFill} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
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
                <AiFillHome cursor={"pointer"}></AiFillHome>
            </Link>
            <Link to="/friend-list">
                <BsFillPeopleFill cursor={"pointer"}></BsFillPeopleFill>
            </Link>
            <Link to="/chatting-list">
                <FiSend cursor={"pointer"}></FiSend>
            </Link>
            <Link to="/setting-page">
                <BsThreeDots cursor={"pointer"}></BsThreeDots>
            </Link>
        </div>
        </StyledNavigationBar>
    );
}

export default Navigation;
