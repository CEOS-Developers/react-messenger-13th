import React from 'react';
import styled from 'styled-components';
import { PersonFill, ChatFill, ThreeDots, EmojiSmile, Bell, Gear} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const StyledNavigationBar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100px;
background-color: #dfdfdf;
`;

const StyledAboveBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 2.3em;
padding-top: 50px;
& * {
    color: gray;
    margin: 5px;
    padding: 0;
}
`;

const StyledUnderBar = styled.div`
display: flex;
flex-direction: column;
font-size: 2em;
padding-bottom: 50px;
& * {
    color: gray;
    margin: 12px;
    padding: 0;
}
`;

function AboveBar() {
    return (
        <>
            <Link to="/friends">
                <PersonFill />
            </Link>
            <Link to="/rooms">
                <ChatFill />
            </Link>
                <ThreeDots />
        </>
    )
}

function UnderBar() {
    return (
        <>
            <EmojiSmile />
            <Bell />
            <Gear />
        </>
    )
}

function NavigationBar() {

    return (
    <StyledNavigationBar>
        <StyledAboveBar>
            <AboveBar />
        </StyledAboveBar>
        <StyledUnderBar>
            <UnderBar />
        </StyledUnderBar>
    </StyledNavigationBar>
    )
};

export default NavigationBar;