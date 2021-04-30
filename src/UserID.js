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
        statusMessage: "I'm the kingdom",
        profileMusic: "Clover - 더보이즈"
      },
      {
        id: 1,
        name: "이소정",
        img: "profile1.jpg",
        statusMessage: "프론트 화이팅"
      },
      {
          id: 2,
          name: "묭이",
          img: "profile2.jpg"
      },
      {
        id: 3,
        name: "영이",
        img: "profile3.jpg",
        statusMessage: "너구리 컨텐츠 사랑해",
        profileMusic: "걸어갈래요 - 너드커넥션"
      },
      {
        id: 4,
        name: "졍이",
        img: "profile4.jpg",
        statusMessage: "안녕 내 이름은 소정 세살이지",
        profileMusic: "질렀어 - SF9"
    },
    {
      id: 5,
      name: "뽀",
      img: "profile5.jpg",
      statusMessage: "소정이랑 술약잡아야지 히히"
    },
    {
      id: 6,
      name: "쭈냥이",
      img: "profile6.jpg",
    },
    {
      id: 7,
      name: "굠이",
      img: "profile7.jpg",
      statusMessage: "속세를 떠났습니다",
      profileMusic: "DON'T CALL ME - SHINEE"
    },
    {
      id: 8,
      name: "쑤",
      img: "profile8.jpg",
      statusMessage: "제빵왕 쑤탁구"
    },
    {
      id: 9,
      name: "밍이",
      img: "profile9.jpg",
      statusMessage: "휴하하하하하하하하하하학",
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