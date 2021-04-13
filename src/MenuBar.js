import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 8vw;
    height: 100vh;
    position: fixed;
    background-color: #ba4f5f;

`;

const MenuButton = styled.button`
	width: 6vw;
  height: auto;
	background: none;
	border: none;
	padding: 0;
	margin: 1vw;
	opacity: 40%;
	&:focus{
  	outline: none;
		opacity: 100%;
  }
	&:hover{
		opacity: 60%;
	}
`;
const ButtonImage = styled.img`
  width: 100%;
	height: 100%;
  background-position: 0px 0px;
  &:focus{
    outline: none;
  }
`;

function MenuBar(){

    return(
        <MenuContainer>

            <MenuButton><ButtonImage src={process.env.PUBLIC_URL + "/profile.png"}/></MenuButton>
						<MenuButton><ButtonImage src={process.env.PUBLIC_URL + "/chatting.png"}/></MenuButton>
						<MenuButton><ButtonImage src={process.env.PUBLIC_URL + "/more.png"}/></MenuButton>
        </MenuContainer>
    );
};

export default MenuBar;