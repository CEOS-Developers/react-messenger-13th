import React from 'react';
import styled from 'styled-components'

const TopBox = styled.div`
  background-color: #e99ba7;
  color: #ba4f5f;
  display : flex;
  padding: 1% 2% 1% 1.5%;
  border-bottom : solid 1px #d16f80;
  position: fixed;
  top: 0px;
  width: 100%;

`;

const ProfileImage = styled.img`
  width: 60px;
  height : 60px;
  border-radius: 70%;
  overflow: hidden;
`;
const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 60px;
  font-size : 20px;
`;

export default function TopBar(props) {
  return (
    <TopBox>
      <ProfileImage src={process.env.PUBLIC_URL + "/img.jpg"} alt="" />
      <ProfileName>name, state</ProfileName>
    </TopBox>
  );
}