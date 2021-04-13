import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin: 15px; 
`;

const ProfileName = styled.div`
  line-height: 25px;
  font-size: 18px;
  margin : 10px 0px 10px;
  padding : 10px;
  color: gray;
`; 

const ProfileBubbleContainer = styled.div`
  display: flex;
  background-color:#f4f4f4;
  border-top : 1px solid #e99ba7;
  margin-left: 5vw;
`;


function ProfileBubble({profile}){
    
    return(
        <ProfileBubbleContainer>
            <ProfileImage src={process.env.PUBLIC_URL + "/"+profile.profileImage+".jpg"}/>
            <ProfileName> { profile.name } </ProfileName>
        </ProfileBubbleContainer>
    );
}

function ChattingProfile({userProfileSet}){

    return(
        <div>
            {userProfileSet.map((profile, id)=><ProfileBubble profile={profile} key ={id}/>)}
        </div>
    );
};

export default ChattingProfile;