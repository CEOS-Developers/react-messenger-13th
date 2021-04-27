import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledNavigationBar = styled.div``;

function Navigation() {
    return(
        <StyledNavigationBar>
        <div className="nav">
            <Link to="/">FriendList</Link>
            <Link to="/chatting-list">ChattingList</Link>
            <Link to="/setting-page">SettingPage</Link>
        </div>
        </StyledNavigationBar>
    );
}

export default Navigation;
