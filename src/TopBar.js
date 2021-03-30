import React, { useEffect, useState } from 'react';
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

const ProfileImageButton = styled.button`
  width: 60px;
  height : 60px;
  border-radius: 70%;
  overflow: hidden;
  padding: 0px;
  border: none;
  &:focus{
    outline: none;
  }
`;
const ProfileImage = styled.img`
  width: 60px;
  height : 60px;
  border-radius: 70%;
  background-position: 0px 0px;
  overflow: hidden;
  &:focus{
    outline: none;
  }
`;
const ProfileName = styled.div`
  padding-left: 20px;
  line-height: 60px;
  font-size : 20px;
`;

export default function TopBar({clickProfileImageButton}) {
  const [userID, setUserID] = useState(1);

  const [userName, setUserName] = useState('SamSoon');

  function clickImage(){
    if(userID===1){
      setUserID(2);
      setUserName('AngelSuHo');
    }
    else{
      setUserID(1);
      setUserName('송우기');
    }
  }
  useEffect(()=>{
    clickProfileImageButton(userID);
  });

  return (
    <TopBox>
      <ProfileImageButton onClick = {clickImage}><ProfileImage src={process.env.PUBLIC_URL +"/"+userID+".jpg"} alt=""/></ProfileImageButton>
      <ProfileName>{userName}</ProfileName>
    </TopBox>
  );
}