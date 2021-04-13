import React, { useState } from 'react';
import styled from 'styled-components';
import ChattingProfile from './ChattingProfile';
import ChattingListTopBar from './ChattingListTopBar';
import userProfileSet from './User'

function ChattingList(){
    const [matchUserSet, setMatchUserSet] = useState(userProfileSet);

    function searchUser(searchUserInput){
        setMatchUserSet([]);
        userProfileSet.map((userProfile)=>{
            if(userProfile.name.includes(searchUserInput)){
                setMatchUserSet(matchUser => [...matchUser, userProfile]);
            }
        })
        console.log(setMatchUserSet);
    }

    return(
        <div>
            <ChattingListTopBar searchUser={searchUser}/>
            <ChattingProfile userProfileSet = {matchUserSet}/>
        </div>
    );
}

export default ChattingList;
