import React from 'react';
import styled from 'styled-components';

const StyledProfileImg = styled.div`
    & img{
        margin-left: 150px;
        width:100px;
        border-radius : 50%;
    }
`;
const UserLists = [
    {
        id: 0,
        name: "현재",
        img: "profile0.jpg",
      },
      {
        id: 1,
        name: "이소정",
        img: "profile1.jpg",
      },
      {
          id: 2,
          name: "묭이",
          img: "profile2.jpg"
      },
      {
        id: 3,
        name: "영이",
        img: "profile3.jpg"
      },
      {
        id: 4,
        name: "졍이",
        img: "profile4.jpg"
    }
    ];


function UserID(props){
const UserLists = [
    {
        id: 0,
        name: "현재",
        img: "profile2.jpg",
      },
      {
        id: 1,
        name: "이소정",
        img: "profile1.jpg",
      },
      {
          id: 2,
          name: "묭이",
          img: "profile3.jpg"
      }
    ];
    return(
        <StyledProfileImg>
        <img src={UserLists[props.id].img} alt="friendImg"></img>
        </StyledProfileImg>
    );
}

export default UserLists;