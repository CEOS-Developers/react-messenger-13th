import React, { useState } from 'react';
import styled from 'styled-components';
import ChattingProfile from './ChattingProfile';
import ChattingListTopBar from './ChattingListTopBar';

function ChattingList(){
    const userProfileSet = [
        {
            profileImage: '1',
            name: '송우기'
        },
        {
            profileImage: '2',
            name: 'AngelSuHo'
        },
    ]

    function searchUser(searchUserInput){
        console.log(searchUserInput);
    }

    return(
        <div>
            <ChattingListTopBar searchUser={searchUser}/>
            <ChattingProfile userProfileSet = {userProfileSet}/>
        </div>
    );
}

export default ChattingList;