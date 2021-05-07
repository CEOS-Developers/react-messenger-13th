import styled from 'styled-components';
import React from 'react';

const ProfileItem = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 20px;
  background-color: rgb(163, 152, 155);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 15px;
`;

const Time = styled.div`
  margin-left: 5%;
  font-style: bold;
  font-size: 15px;
`;

const Battery = styled.img`
  height: 17px;
  margin-right: 5%;
`;

const LeftThings = styled.div`
  height: 98.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.5px solid black;
  background-color: rgb(227, 200, 204);
`;
const ChangeableProfile = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
`;
const NameItem = styled.div`
  flex-direction: column;
  align-content: center;
  margin-top: 5px;
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 38%;
  overflow: hidden;

  margin-right: 30px;
  margin-left: 20px;
`;

const Name = styled.div`
  font-size: 110%;
  font-weight: bold;
`;

const State = styled.div`
  font-size: 90%;
  margin-top: 15px;
`;

const Image = styled.img`
  width: 100px;
  height: 98.5px;
`;

var now = new Date();
if (now.getMinutes() < 10) {
  var minutes = '0' + now.getMinutes();
} else var minutes = now.getMinutes();
var time = now.getHours() + ':' + minutes;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <ProfileItem>
      <Header>
        <Time>{time}</Time>
        <Battery src={process.env.PUBLIC_URL + 'battery.png'} />
      </Header>
      <LeftThings onClick={props.clickProfile}>
        <ChangeableProfile>
          <ProfileImg src={props.userData.profileImg} />
          <NameItem>
            <Name>{props.userData.name}</Name>
            <State>현재 활동 중</State>
          </NameItem>
        </ChangeableProfile>
        <Image src={process.env.PUBLIC_URL + 'myMelody-profile.png'} />
      </LeftThings>
    </ProfileItem>
  );
}
// export default function (props) {
//   return (
//     <ProfileItem>
//       <Header>
//         <Time>{time}</Time>
//         <Battery src={process.env.PUBLIC_URL + 'battery.png'} />
//       </Header>
//       <LeftThings onClick={props.clickProfile}>
//         <ChangeableProfile>
//           <ProfileImg src={props.profileData.proImg} />
//           <NameItem>
//             <Name>{props.profileData.name}</Name>
//             <State>현재 활동 중</State>
//           </NameItem>
//         </ChangeableProfile>
//         <Image src={process.env.PUBLIC_URL + 'myMelody-profile.png'} />
//       </LeftThings>
//     </ProfileItem>
//   );
// }
