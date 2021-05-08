import React from 'react';
import styled from 'styled-components';
import { PersonFill, ChatFill, ThreeDots, EmojiSmile, Bell, Gear} from 'react-bootstrap-icons';

const NavigationBar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-grow: 1;
`;

const AboveBar = styled.div`
display: flex;
flex-direction: column;
`;

const UnderBar = styled.div`
display: flex;
flex-direction: column;
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
            <Link to="/settings">
                <ThreeDots />
            </Link>
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
    <NavigationBar>
        <AboveBar/>
        <UnderBar/>
    </NavigationBar>
    )
};

export default function NavigationBar;